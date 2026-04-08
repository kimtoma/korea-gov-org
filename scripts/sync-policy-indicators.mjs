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

const policyIndicatorsByCanonicalId = Object.fromEntries(
  bundle.map((entry) => [entry.canonicalId, entry.indicators]),
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
