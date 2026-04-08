import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = process.cwd();
const DATA_JS_PATH = path.join(ROOT, "data.js");
const OUTPUT_DIR = path.join(ROOT, "data");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "normalization-foundation.json");

function loadData() {
  const source = fs.readFileSync(DATA_JS_PATH, "utf8");
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${source}\nthis.__exported = { govData, sources };`, context, { filename: "data.js" });
  const exported = context.__exported ?? {};
  if (!exported.govData || !exported.sources) {
    throw new Error("Failed to load govData/sources from data.js");
  }
  return exported;
}

function parseBudgetToWon(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  const input = value.replace(/,/g, "").trim();
  const match = input.match(/^(\d+(?:\.\d+)?)(조|억)$/);
  if (!match) return null;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount)) return null;
  if (match[2] === "조") return Math.round(amount * 1_0000_0000_0000);
  return Math.round(amount * 100_000_000);
}

function collectTree(rootNode) {
  const canonicalOrgs = [];
  const sourceNodes = [];
  const aliases = [];
  const lineage = [];
  const budgetFacts = [];
  const indicatorFacts = [];
  const seenCanonical = new Set();
  const seenAlias = new Set();
  const seenLineage = new Set();

  function visit(node, parent = null, pathNames = []) {
    if (!node || typeof node !== "object") return;

    const canonicalId = node.identifiers?.canonicalId ?? `derived-${node.name}`;
    const orgCode = node.identifiers?.orgCode ?? null;
    const currentPath = [...pathNames, node.name];
    const sourceRefs = Array.from(new Set(node.sourceRefs ?? []));
    const status = node.effective?.status ?? node.status ?? "active";

    if (!seenCanonical.has(canonicalId)) {
      canonicalOrgs.push({
        canonicalId,
        currentNameKo: node.name,
        currentNameEn: node.nameEn ?? null,
        currentNameEnAbbr: node.nameEnAbbr ?? null,
        type: node.type ?? null,
        currentStatus: status,
        effective: node.effective ?? null,
        parentCanonicalId: parent?.identifiers?.canonicalId ?? null,
        parentOrgCode: parent?.identifiers?.orgCode ?? null,
        officialUrl: node.url ?? null,
        sourceRefs,
        currentPath,
      });
      seenCanonical.add(canonicalId);
    }

    sourceNodes.push({
      canonicalId,
      nameKo: node.name,
      sourceOrgCode: orgCode,
      sourceOrgCodeType: node.identifiers?.orgCodeType ?? null,
      sourceScheme: node.identifiers?.scheme ?? null,
      parentSourceOrgCode: node.identifiers?.parentOrgCode ?? parent?.identifiers?.orgCode ?? null,
      sourceId: node.identifiers?.sourceId ?? null,
      status: node.identifiers?.status ?? status,
      officialNameKo: node.identifiers?.officialName ?? node.name,
      sourceRefs,
    });

    const aliasCandidates = new Set([node.name]);
    if (node.identifiers?.officialName && node.identifiers.officialName !== node.name) {
      aliasCandidates.add(node.identifiers.officialName);
    }

    for (const aliasName of aliasCandidates) {
      const aliasKey = `${canonicalId}::${aliasName}`;
      if (seenAlias.has(aliasKey)) continue;
      aliases.push({
        canonicalId,
        alias: aliasName,
        lang: /[A-Za-z]/.test(aliasName) ? "en" : "ko",
        aliasType: aliasName === node.name ? "display" : "official",
        sourceRefs,
      });
      seenAlias.add(aliasKey);
    }

    for (const item of node.history ?? []) {
      const lineageKey = `${canonicalId}::${item.date || ""}::${item.event || ""}::${item.summary || ""}`;
      if (seenLineage.has(lineageKey)) continue;
      lineage.push({
        canonicalId,
        date: item.date ?? null,
        event: item.event ?? null,
        summary: item.summary ?? null,
        sourceRefs: item.sourceRefs ?? [],
      });
      seenLineage.add(lineageKey);
    }

    if (node.identifiers?.predecessorOrgCode) {
      const lineageKey = `${canonicalId}::predecessor::${node.identifiers.predecessorOrgCode}`;
      if (!seenLineage.has(lineageKey)) {
        lineage.push({
          canonicalId,
          date: node.effective?.from ?? null,
          event: "predecessor-org-code",
          summary: `${node.identifiers.predecessorOrgCode}에서 이어지는 기관 코드 계보 준비값`,
          predecessorOrgCode: node.identifiers.predecessorOrgCode,
          sourceRefs,
        });
        seenLineage.add(lineageKey);
      }
    }

    if (node.budgetMeta) {
      budgetFacts.push({
        canonicalId,
        fiscalYear: node.budgetMeta.fiscalYear,
        phase: node.budgetMeta.phase ?? null,
        unit: node.budgetMeta.unit ?? "KRW",
        rawDisplayAmount: node.budgetMeta.displayAmount ?? node.budget ?? null,
        normalizedAmountKrw: parseBudgetToWon(node.budgetMeta.displayAmount ?? node.budget),
        amountBasis: node.budgetMeta.amountBasis ?? null,
        sourceId: node.budgetMeta.sourceId ?? null,
        datasetId: node.budgetMeta.datasetId ?? null,
        sourceRefs: node.budgetMeta.sourceRefs ?? [],
      });
    }

    for (const indicator of node.policyIndicators ?? []) {
      indicatorFacts.push({
        canonicalId,
        indicatorId: indicator.id ?? null,
        indicatorNameKo: indicator.name ?? null,
        sourceSystem: indicator.datasetId ?? null,
        datasetId: indicator.datasetId ?? null,
        sourceId: indicator.sourceId ?? null,
        year: indicator.year ?? null,
        value: indicator.value ?? null,
        unit: indicator.unit ?? null,
        valueDisplay: indicator.valueDisplay ?? null,
        trendDirection: indicator.trendDirection ?? null,
        trendLabel: indicator.trendLabel ?? null,
        series: Array.isArray(indicator.series)
          ? indicator.series.map((point) => ({
              year: point.year ?? null,
              value: point.value ?? null,
            }))
          : [],
        summary: indicator.summary ?? null,
        sourceRefs: indicator.sourceRefs ?? [],
      });
    }

    for (const child of node.children ?? []) {
      visit(child, node, currentPath);
    }
  }

  visit(rootNode);
  canonicalOrgs.sort((a, b) => a.currentPath.join("/").localeCompare(b.currentPath.join("/"), "ko"));
  sourceNodes.sort((a, b) => (a.sourceOrgCode || a.nameKo).localeCompare(b.sourceOrgCode || b.nameKo, "ko"));
  aliases.sort((a, b) => a.alias.localeCompare(b.alias, "ko"));
  lineage.sort((a, b) => `${a.date || "9999"}-${a.canonicalId}-${a.event || ""}`.localeCompare(`${b.date || "9999"}-${b.canonicalId}-${b.event || ""}`, "ko"));
  budgetFacts.sort((a, b) => (a.canonicalId + a.fiscalYear).localeCompare(b.canonicalId + b.fiscalYear, "ko"));
  indicatorFacts.sort((a, b) => `${a.canonicalId}-${a.indicatorId}-${a.year}`.localeCompare(`${b.canonicalId}-${b.indicatorId}-${b.year}`, "ko"));

  return { canonicalOrgs, sourceNodes, aliases, lineage, budgetFacts, indicatorFacts };
}

const { govData, sources } = loadData();
const foundation = collectTree(govData);

const output = {
  version: 1,
  generatedAt: new Date().toISOString(),
  description: "Phase 2 normalization foundation extracted from the UI data model. Keeps current UI stable while separating source mappings, canonical entities, aliases/lineage, and normalized budget facts for later public-dataset ingestion.",
  sourceCatalog: sources.map((source) => ({
    id: source.id,
    name: source.name,
    url: source.url,
    desc: source.desc,
  })),
  metrics: {
    canonicalOrgCount: foundation.canonicalOrgs.length,
    sourceNodeCount: foundation.sourceNodes.length,
    aliasCount: foundation.aliases.length,
    lineageEventCount: foundation.lineage.length,
    budgetFactCount: foundation.budgetFacts.length,
    indicatorFactCount: foundation.indicatorFacts.length,
    indicatorCoverageOrgCount: new Set(foundation.indicatorFacts.map((fact) => fact.canonicalId)).size,
  },
  canonicalOrgs: foundation.canonicalOrgs,
  sourceNodes: foundation.sourceNodes,
  aliases: foundation.aliases,
  lineage: foundation.lineage,
  budgetFacts: foundation.budgetFacts,
  indicatorFacts: foundation.indicatorFacts,
};

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Wrote ${path.relative(ROOT, OUTPUT_PATH)}`);
console.log(JSON.stringify(output.metrics, null, 2));
