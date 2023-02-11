import { relative, resolve } from "node:path";
import { defineConfig, type Options } from "tsup";

type ConfigOptions = Pick<Options, "globalName" | "format" | "target" | "sourcemap" | "minify" | "esbuildOptions">;

export const createTsupConfig = ({
	globalName,
	format = ["esm", "cjs"],
	target = "esnext",
	sourcemap = true,
	minify = true,
	esbuildOptions = (options, context) => {
		if (context.format === "cjs") {
			options.banner = {
				js: '"use strict";'
			};
		}
	}
}: ConfigOptions = {}) =>
	defineConfig({
		clean: true,
		dts: false,
		entry: ["src/index.ts"],
		format,
		minify,
		skipNodeModulesBundle: true,
		sourcemap,
		target,
		tsconfig: relative(__dirname, resolve(process.cwd(), "src", "tsconfig.json")),
		keepNames: true,
		globalName,
		esbuildOptions
	});
