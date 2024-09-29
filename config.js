const main = "/tmp/michele/main.js";
const entry = `${App.configDir}/main.ts`;

await Utils.execAsync([
  "bun",
  "build",
  entry,
  "--outfile",
  main,
  "--external",
  "resource://*",
  "--external",
  "gi://*",
  "--external",
  "file://*",
]);

await import(`file://${main}`);

export {};
