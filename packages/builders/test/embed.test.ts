import { describe, expect, test } from "vitest";
import { EmbedBuilder } from "../src";
import type { APIEmbed } from "discord-api-types/v10";

describe("Embed", () => {
	const removeUndefined: (obj: APIEmbed) => APIEmbed = (obj: APIEmbed) =>
		Object.entries(obj)
			.filter(([, value]) => value !== undefined)
			.map(([key, value]) => {
				if (typeof value === "object" && !Array.isArray(value)) {
					return [key, removeUndefined(value)];
				}
				return [key, value];
			})
			.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

	describe("Embed title", () => {
		test("GIVEN embed with  a valid title THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({ title: "Hello World" });
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({ title: "Hello World" });
		});

		test("GIVEN embed with an invalid title THEN throws error", () => {
			expect(() => new EmbedBuilder({ title: "a".repeat(257) })).toThrowError();
		});
	});

	describe("Embed description", () => {
		test("GIVEN embed with a valid description THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({ description: "Hello World" });
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({ description: "Hello World" });
		});

		test("GIVEN embed with an invalid description THEN throws error", () => {
			expect(() => new EmbedBuilder({ description: "a".repeat(4097) })).toThrowError();
		});
	});

	describe("Embed url", () => {
		test("GIVEN embed with a valid URL THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({ url: "https://google.com" });
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({ url: "https://google.com" });
		});

		test.each(["hello", "discord://message"])("GIVEN embed with an invalid URL THEN throws error", (input) => {
			expect(() => new EmbedBuilder({ url: input })).toThrowError();
		});
	});

	describe("Embed color", () => {
		test("GIVEN embed with a valid color THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({ color: 0xfb38c9 });
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({ color: 0xfb38c9 });
		});

		test("GIVEN embed with an invalid color THEN throws error", () => {
			expect(() => new EmbedBuilder({ color: 0x1000000 })).toThrowError();
		});
	});

	describe("Embed timestamp", () => {
		test("GIVEN embed with a valid timestamp THEN return valid toJSON data", () => {
			const date = new Date();
			const embed = new EmbedBuilder({ timestamp: date });
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({ timestamp: date.toISOString() });
		});
	});

	describe("Embed image", () => {
		test("GIVEN embed with a valid image THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({ image: { url: "https://google.com" } });
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({ image: { url: "https://google.com" } });
		});

		test("GIVEN embed with an invalid image THEN throws error", () => {
			expect(() => new EmbedBuilder({ image: { url: "hello" } })).toThrowError();
		});
	});

	describe("Embed thumbnail", () => {
		test("GIVEN embed with a valid thumbnail THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({ thumbnail: { url: "https://google.com" } });
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({
				thumbnail: { url: "https://google.com" }
			});
		});

		test("GIVEN embed with an invalid thumbnail THEN throws error", () => {
			expect(() => new EmbedBuilder({ thumbnail: { url: "hello" } })).toThrowError();
		});
	});

	describe("Embed author", () => {
		test("GIVEN embed with a valid author THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({
				author: {
					name: "Hello World",
					url: "https://google.com",
					iconUrl: "https://google.com"
				}
			});
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({
				author: {
					name: "Hello World",
					url: "https://google.com",
					icon_url: "https://google.com"
				}
			});
		});

		test("GIVEN embed with an invalid author THEN throws error", () => {
			expect(
				() =>
					new EmbedBuilder({
						author: {
							name: "a".repeat(257),
							url: "hello",
							iconUrl: "hello"
						}
					})
			).toThrowError();
		});
	});

	describe("Embed footer", () => {
		test("GIVEN embed with a valid footer THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({
				footer: {
					text: "Hello World",
					iconUrl: "https://google.com"
				}
			});
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({
				footer: {
					text: "Hello World",
					icon_url: "https://google.com"
				}
			});
		});

		test("GIVEN embed with an invalid footer THEN throws error", () => {
			expect(
				() =>
					new EmbedBuilder({
						footer: {
							text: "a".repeat(257),
							iconUrl: "hello"
						}
					})
			).toThrowError();
		});
	});

	describe("Embed fields", () => {
		test("GIVEN embed with a valid field THEN return valid toJSON data", () => {
			const embed = new EmbedBuilder({
				fields: [
					{
						name: "Hello World",
						value: "Hello World",
						inline: true
					}
				]
			});
			expect(removeUndefined(embed.toJSON())).toStrictEqual<APIEmbed>({
				fields: [
					{
						name: "Hello World",
						value: "Hello World",
						inline: true
					}
				]
			});
		});

		test("GIVEN embed with an invalid field THEN throws error", () => {
			expect(
				() =>
					new EmbedBuilder({
						fields: [
							{
								name: "a".repeat(257),
								value: "a".repeat(1025),
								inline: true
							}
						]
					})
			).toThrowError();
		});
	});
});
