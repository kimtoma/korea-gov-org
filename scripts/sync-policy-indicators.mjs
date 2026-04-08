import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "data", "policy-indicators");
const sourceFiles = [
  "economy.json",
  "governance.json",
  "society.json",
  "territory.json",
];

const bundle = [];
for (const file of sourceFiles) {
  const items = JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
  bundle.push(...items);
}
const sourceCatalog = JSON.parse(fs.readFileSync(path.join(dataDir, "sources.json"), "utf8"));
const sourceCatalogById = new Map(sourceCatalog.map((item) => [item.id, item]));

function enrichIndicator(indicator) {
  const primarySource = sourceCatalogById.get(indicator.sourceId) || sourceCatalogById.get(indicator.sourceRefs?.[0]);
  if (!primarySource) return indicator;
  return {
    ...indicator,
    datasetId: indicator.datasetId || primarySource.datasetId || primarySource.sourcePortal || primarySource.name,
    datasetName: indicator.datasetName || primarySource.datasetName,
    sourceUrl: indicator.sourceUrl || primarySource.url,
    sourcePublisher: indicator.sourcePublisher || primarySource.publisher,
    sourceType: indicator.sourceType || primarySource.sourceType,
    lastVerified: indicator.lastVerified || primarySource.lastVerified,
    updateCadence: indicator.updateCadence || primarySource.updateCadence,
    methodology: indicator.methodology || primarySource.methodology,
    coverage: indicator.coverage || primarySource.coverage,
    qualityNote: indicator.qualityNote || primarySource.qualityNote,
  };
}

const policyIndicatorsByCanonicalId = Object.fromEntries(
  bundle.map((entry) => [entry.canonicalId, entry.indicators.map(enrichIndicator)]),
);

const generatedBlock = `// BEGIN GENERATED POLICY INDICATORS (source: data/policy-indicators/*.json)\nconst policyIndicatorsByCanonicalId=${JSON.stringify(policyIndicatorsByCanonicalId, null, 2)};\n\nsources.push(\n${sourceCatalog.map((item) => `  ${JSON.stringify(item)}`).join(",\n")}\n);\n// END GENERATED POLICY INDICATORS`;

function replaceInFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const start = source.indexOf("// BEGIN GENERATED POLICY INDICATORS");
  const end = source.indexOf("// END GENERATED POLICY INDICATORS");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Markers not found in ${filePath}`);
  }
  const endWithMarker = end + "// END GENERATED POLICY INDICATORS".length;
  const updated = `${source.slice(0, start)}${generatedBlock}${source.slice(endWithMarker)}`;
  fs.writeFileSync(filePath, updated);
}

replaceInFile(path.join(root, "data.js"));
replaceInFile(path.join(root, "index.html"));

console.log(`Synced ${bundle.length} policy-indicator org entries and ${sourceCatalog.length} sources.`);
