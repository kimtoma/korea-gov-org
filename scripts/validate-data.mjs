import fs from "node:fs";
import vm from "node:vm";

const NORMALIZATION_FOUNDATION_PATH = "data/normalization-foundation.json";

const EXPECTED_COUNTS = {
  ministry: 19,
  office: 6,
  agency: 18,
  commission: 6,
};

const errors = [];

function normalizeText(value) {
  return value.replace(/\r\n/g, "\n").replace(/[ \t]+$/gm, "").trim();
}

function extractCore(source) {
  const start = source.indexOf('const W="https://upload.wikimedia.org/wikipedia/commons/thumb/";');
  const end = source.indexOf("const divisionHeads=");
  if (start === -1 || end === -1 || end <= start) {
    return null;
  }
  return source.slice(start, end);
}

function isPlannedNode(node) {
  return node.status === "planned" || (typeof node.isNew === "string" && node.isNew.includes("신설예정"));
}

function isBudgetStringValid(value) {
  if (typeof value !== "string") return false;
  const input = value.replace(/\s+/g, "");
  const chunk = "(?:\\d{1,3}(?:,\\d{3})*|\\d+)";
  const amount = `${chunk}(?:\\.\\d+)?`;
  const re = new RegExp(`^${amount}(?:조|억)$`);
  return re.test(input);
}

const dataJs = fs.readFileSync("data.js", "utf8");
const indexHtml = fs.readFileSync("index.html", "utf8");

const dataCore = extractCore(dataJs);
const inlineCore = extractCore(indexHtml);
if (!dataCore || !inlineCore) {
  errors.push("Failed to extract data blocks from index.html or data.js.");
} else if (normalizeText(dataCore) !== normalizeText(inlineCore)) {
  errors.push("index.html inline data is not synchronized with data.js.");
}

const context = {};
vm.createContext(context);
vm.runInContext(
  `${dataJs}\nthis.__exported = { people, govData, sources };`,
  context,
  { filename: "data.js" },
);

const { people, govData, sources } = context.__exported ?? {};
if (!people || !govData || !sources) {
  errors.push("Failed to evaluate people/govData/sources from data.js.");
}

const seenNodeNames = new Set();
const duplicateNodeNames = new Set();
const counts = { ministry: 0, office: 0, agency: 0, commission: 0 };
const sourceIds = new Set(Array.isArray(sources) ? sources.map((src) => src.id).filter(Boolean) : []);
let budgetNodeCount = 0;
let policyIndicatorCount = 0;

for (const src of sources ?? []) {
  if (!src.id || !src.name || !src.url) {
    errors.push("Each source catalog entry must have id, name, and url.");
    continue;
  }
  for (const field of ["datasetId", "lastVerified", "updateCadence", "methodology", "publisher", "sourceType"]) {
    if (!src[field] || typeof src[field] !== "string") {
      errors.push(`Source \"${src.id}\" is missing ${field}.`);
    }
  }
}

function walk(node) {
  if (!node || typeof node !== "object") return;

  if (typeof node.name === "string" && node.name.length > 0) {
    if (seenNodeNames.has(node.name)) {
      duplicateNodeNames.add(node.name);
    } else {
      seenNodeNames.add(node.name);
    }
  }

  if (node.head && !people?.[node.head]) {
    errors.push(`Missing people entry for head "${node.head}" on node "${node.name}".`);
  }

  if (Object.prototype.hasOwnProperty.call(node, "budget") && node.budget && !isBudgetStringValid(node.budget)) {
    errors.push(`Invalid budget format "${node.budget}" on node "${node.name}".`);
  }

  if (node.identifiers) {
    if (!node.identifiers.orgCode || typeof node.identifiers.orgCode !== "string") {
      errors.push(`Missing identifiers.orgCode on node "${node.name}".`);
    }
    if (node.identifiers.sourceId && !sourceIds.has(node.identifiers.sourceId)) {
      errors.push(`Unknown identifier sourceId "${node.identifiers.sourceId}" on node "${node.name}".`);
    }
  }

  if (node.budgetMeta) {
    budgetNodeCount += 1;
    if (!node.budgetMeta.fiscalYear || typeof node.budgetMeta.fiscalYear !== "number") {
      errors.push(`Missing numeric budgetMeta.fiscalYear on node "${node.name}".`);
    }
    for (const ref of node.budgetMeta.sourceRefs ?? []) {
      if (!sourceIds.has(ref)) {
        errors.push(`Unknown budget source ref "${ref}" on node "${node.name}".`);
      }
    }
  }

  if (Array.isArray(node.policyIndicators)) {
    policyIndicatorCount += node.policyIndicators.length;
    for (const indicator of node.policyIndicators) {
      if (!indicator.id || !indicator.name) {
        errors.push(`Policy indicator on node "${node.name}" is missing id or name.`);
      }
      if (typeof indicator.year !== "number") {
        errors.push(`Policy indicator "${indicator.id}" on node "${node.name}" is missing numeric year.`);
      }
      if (typeof indicator.value !== "number") {
        errors.push(`Policy indicator "${indicator.id}" on node "${node.name}" is missing numeric value.`);
      }
      if (indicator.series !== undefined) {
        if (!Array.isArray(indicator.series) || indicator.series.length < 2) {
          errors.push(`Policy indicator "${indicator.id}" on node "${node.name}" must have a series array with at least 2 points.`);
        } else {
          for (const point of indicator.series) {
            if (typeof point.year !== "number" || typeof point.value !== "number") {
              errors.push(`Policy indicator "${indicator.id}" on node "${node.name}" has an invalid series point.`);
            }
          }
        }
      }
      for (const field of ["datasetId", "sourceUrl", "lastVerified", "updateCadence", "methodology"]) {
        if (!indicator[field] || typeof indicator[field] !== "string") {
          errors.push(`Policy indicator "${indicator.id}" on node "${node.name}" is missing ${field}.`);
        }
      }
      for (const ref of indicator.sourceRefs ?? []) {
        if (!sourceIds.has(ref)) {
          errors.push(`Unknown policy indicator source ref "${ref}" on node "${node.name}".`);
        }
      }
    }
  }

  if (node.effective && node.effective.from && !/^\d{4}-\d{2}-\d{2}$/.test(node.effective.from)) {
    errors.push(`Invalid effective.from "${node.effective.from}" on node "${node.name}".`);
  }

  for (const ref of node.sourceRefs ?? []) {
    if (!sourceIds.has(ref)) {
      errors.push(`Unknown source ref "${ref}" on node "${node.name}".`);
    }
  }

  for (const item of node.history ?? []) {
    if (item.date && !/^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
      errors.push(`Invalid history date "${item.date}" on node "${node.name}".`);
    }
    for (const ref of item.sourceRefs ?? []) {
      if (!sourceIds.has(ref)) {
        errors.push(`Unknown history source ref "${ref}" on node "${node.name}".`);
      }
    }
  }

  if (!isPlannedNode(node) && counts[node.type] !== undefined) {
    counts[node.type] += 1;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach(walk);
  }
}

walk(govData);

if (duplicateNodeNames.size > 0) {
  errors.push(`Duplicate node names: ${Array.from(duplicateNodeNames).sort().join(", ")}`);
}

for (const key of Object.keys(EXPECTED_COUNTS)) {
  if (counts[key] !== EXPECTED_COUNTS[key]) {
    errors.push(`Count mismatch for ${key}: expected ${EXPECTED_COUNTS[key]}, got ${counts[key]}.`);
  }
}

if (!fs.existsSync(NORMALIZATION_FOUNDATION_PATH)) {
  errors.push(`Missing ${NORMALIZATION_FOUNDATION_PATH}. Run node scripts/build-normalization-foundation.mjs first.`);
} else {
  const normalization = JSON.parse(fs.readFileSync(NORMALIZATION_FOUNDATION_PATH, "utf8"));
  const canonicalIds = new Set();
  for (const node of normalization.canonicalOrgs ?? []) {
    if (!node.canonicalId) {
      errors.push("Normalization foundation has a canonical org without canonicalId.");
      continue;
    }
    if (canonicalIds.has(node.canonicalId)) {
      errors.push(`Duplicate canonicalId in normalization foundation: ${node.canonicalId}`);
    }
    canonicalIds.add(node.canonicalId);
  }

  for (const alias of normalization.aliases ?? []) {
    if (!canonicalIds.has(alias.canonicalId)) {
      errors.push(`Normalization alias references unknown canonicalId: ${alias.canonicalId}`);
    }
  }

  for (const item of normalization.lineage ?? []) {
    if (!canonicalIds.has(item.canonicalId)) {
      errors.push(`Normalization lineage references unknown canonicalId: ${item.canonicalId}`);
    }
  }

  for (const fact of normalization.budgetFacts ?? []) {
    if (!canonicalIds.has(fact.canonicalId)) {
      errors.push(`Normalization budget fact references unknown canonicalId: ${fact.canonicalId}`);
    }
    if (typeof fact.normalizedAmountKrw !== "number" || !Number.isFinite(fact.normalizedAmountKrw) || fact.normalizedAmountKrw <= 0) {
      errors.push(`Normalization budget fact has invalid normalizedAmountKrw for canonicalId ${fact.canonicalId}.`);
    }
  }

  for (const fact of normalization.indicatorFacts ?? []) {
    if (!canonicalIds.has(fact.canonicalId)) {
      errors.push(`Normalization indicator fact references unknown canonicalId: ${fact.canonicalId}`);
    }
    if (typeof fact.value !== "number" || !Number.isFinite(fact.value)) {
      errors.push(`Normalization indicator fact has invalid numeric value for canonicalId ${fact.canonicalId}.`);
    }
  }

  if ((normalization.metrics?.budgetFactCount ?? 0) !== budgetNodeCount) {
    errors.push(`Normalization budgetFactCount mismatch: expected ${budgetNodeCount}, got ${normalization.metrics?.budgetFactCount ?? 0}.`);
  }
  if ((normalization.metrics?.indicatorFactCount ?? 0) !== policyIndicatorCount) {
    errors.push(`Normalization indicatorFactCount mismatch: expected ${policyIndicatorCount}, got ${normalization.metrics?.indicatorFactCount ?? 0}.`);
  }
  if ((normalization.metrics?.canonicalOrgCount ?? 0) !== canonicalIds.size) {
    errors.push(`Normalization canonicalOrgCount mismatch: expected ${canonicalIds.size}, got ${normalization.metrics?.canonicalOrgCount ?? 0}.`);
  }
}

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const err of errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}

console.log("Validation passed.");
console.log(
  `Counts (current): ministries=${counts.ministry}, offices=${counts.office}, agencies=${counts.agency}, commissions=${counts.commission}`,
);
