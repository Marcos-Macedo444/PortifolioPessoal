const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectRoot = fs.realpathSync.native(path.resolve(__dirname, ".."));
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const args = process.argv.slice(2);

if (!args.length) {
  console.error("Usage: node scripts/next-runner.cjs <dev|build|start> [...args]");
  process.exit(1);
}

const env = {
  ...process.env,
  INIT_CWD: projectRoot,
  PWD: projectRoot
};

process.chdir(projectRoot);

if (args[0] === "build" || args[0] === "dev") {
  fs.rmSync(path.join(projectRoot, ".next"), { recursive: true, force: true });
}

const result = spawnSync(process.execPath, [nextBin, ...args], {
  cwd: projectRoot,
  env,
  stdio: "inherit"
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
