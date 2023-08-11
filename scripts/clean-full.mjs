import { rm } from "node:fs/promises";

const rootDir = new URL("../", import.meta.url);
const packagesDir = new URL("packages/", rootDir);
const options = { recursive: true, force: true };

const paths = [
	// Root node_modules
	new URL("node_modules/", rootDir),

	// Nested node_modules folders
	new URL("example/node_modules/", packagesDir),

	// Dist folders
	new URL("example/dist/", packagesDir)
];

await Promise.all(paths.map((path) => rm(path, options)));
