import { describe, expect } from "vitest";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import {
	SlashCommandBuilder,
	SlashCommandOptionBuilder,
	SlashCommandSubcommandBuilder,
	SlashCommandSubcommandGroupBuilder
} from "../src";

describe("Slash Commands", () => {
	describe("SlashCommandBuilder", () => {
		const createBuilder = () => new SlashCommandBuilder("test", "test description");
		const createBuilderWithOptionalParams = () =>
			new SlashCommandBuilder("test", "test description", {
				nameLocalizations: {
					de: "test",
					"en-GB": "test"
				},
				descriptionLocalizations: {
					de: "test description",
					"en-GB": "test description"
				},
				dmPermission: true,
				defaultMemberPermissions: 8
			});
		const createBuilderWithOptions = () =>
			createBuilder()
				.addOption(
					new SlashCommandOptionBuilder(
						"attachment",
						ApplicationCommandOptionType.Attachment,
						"attachment option"
					)
				)
				.addOption(
					new SlashCommandOptionBuilder("boolean", ApplicationCommandOptionType.Boolean, "boolean option")
				)
				.addOption(
					new SlashCommandOptionBuilder("channel", ApplicationCommandOptionType.Channel, "channel option")
				)
				.addOption(
					new SlashCommandOptionBuilder("integer", ApplicationCommandOptionType.Integer, "integer option")
				)
				.addOption(
					new SlashCommandOptionBuilder(
						"mentionable",
						ApplicationCommandOptionType.Mentionable,
						"mentionable option"
					)
				)
				.addOption(
					new SlashCommandOptionBuilder("number", ApplicationCommandOptionType.Number, "number option")
				)
				.addOption(new SlashCommandOptionBuilder("role", ApplicationCommandOptionType.Role, "role option"))
				.addOption(
					new SlashCommandOptionBuilder("string", ApplicationCommandOptionType.String, "string option")
				)
				.addOption(new SlashCommandOptionBuilder("user", ApplicationCommandOptionType.User, "user option"));
		const createBuilderWithSubcommand = () =>
			createBuilder().addSubcommand(new SlashCommandSubcommandBuilder("subcommand", "subcommand description"));
		const createBuilderWithSubcommandGroup = () =>
			createBuilder().addSubcommandGroup(
				new SlashCommandSubcommandGroupBuilder("subcommandgroup", "subcommandgroup description")
			);

		describe("SlashCommandBuilder without options", () => {
			test("GIVEN invalid builder THEN throw error", () => {
				expect(() => new SlashCommandBuilder("", "test description")).toThrowError();

				expect(() => new SlashCommandBuilder("test", "")).toThrowError();
			});

			test("GIVEN valid builder THEN does not throw error", () => {
				expect(() => createBuilder()).not.toThrowError();

				expect(() => createBuilder().toJSON()).not.toThrowError();
			});

			test("GIVEN valid builder with optional parameters THEN does not throw error", () => {
				expect(() => createBuilderWithOptionalParams()).not.toThrowError();

				expect(() => createBuilderWithOptionalParams().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandBuilder with simple options", () => {
			test("GIVEN valid builder with options THEN does not throw error", () => {
				expect(() => createBuilderWithOptions()).not.toThrowError();

				expect(() => createBuilderWithOptions().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandBuilder with subcommands", () => {
			test("GIVEN valid builder with subcommands THEN does not throw error", () => {
				expect(() => createBuilderWithSubcommand()).not.toThrowError();

				expect(() => createBuilderWithSubcommand().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandBuilder with subcommand groups", () => {
			test("GIVEN valid builder with subcommand groups THEN does not throw error", () => {
				expect(() => createBuilderWithSubcommandGroup()).not.toThrowError();

				expect(() => createBuilderWithSubcommandGroup().toJSON()).not.toThrowError();
			});
		});
	});

	describe("SlashCommandSubcommandBuilder", () => {
		const createBuilder = () => new SlashCommandSubcommandBuilder("test", "test description");
		const createBuilderWithOptions = () =>
			createBuilder()
				.addOption(
					new SlashCommandOptionBuilder(
						"attachment",
						ApplicationCommandOptionType.Attachment,
						"attachment option"
					)
				)
				.addOption(
					new SlashCommandOptionBuilder("boolean", ApplicationCommandOptionType.Boolean, "boolean option")
				)
				.addOption(
					new SlashCommandOptionBuilder("channel", ApplicationCommandOptionType.Channel, "channel option")
				)
				.addOption(
					new SlashCommandOptionBuilder("integer", ApplicationCommandOptionType.Integer, "integer option")
				)
				.addOption(
					new SlashCommandOptionBuilder(
						"mentionable",
						ApplicationCommandOptionType.Mentionable,
						"mentionable option"
					)
				)
				.addOption(
					new SlashCommandOptionBuilder("number", ApplicationCommandOptionType.Number, "number option")
				)
				.addOption(new SlashCommandOptionBuilder("role", ApplicationCommandOptionType.Role, "role option"))
				.addOption(
					new SlashCommandOptionBuilder("string", ApplicationCommandOptionType.String, "string option")
				)
				.addOption(new SlashCommandOptionBuilder("user", ApplicationCommandOptionType.User, "user option"));

		describe("SlashCommandSubcommandBuilder without options", () => {
			test("GIVEN invalid builder THEN throw error", () => {
				expect(() => new SlashCommandSubcommandBuilder("", "test description")).toThrowError();

				expect(() => new SlashCommandSubcommandBuilder("test", "")).toThrowError();
			});

			test("GIVEN valid builder THEN does not throw error", () => {
				expect(() => createBuilder()).not.toThrowError();

				expect(() => createBuilder().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandSubcommandBuilder with simple options", () => {
			test("GIVEN valid builder with options THEN does not throw error", () => {
				expect(() => createBuilderWithOptions()).not.toThrowError();

				expect(() => createBuilderWithOptions().toJSON()).not.toThrowError();
			});
		});
	});

	describe("SlashCommandSubcommandGroupBuilder", () => {
		const createBuilder = () => new SlashCommandSubcommandGroupBuilder("test", "test description");
		const createBuilderWithSubcommand = () =>
			createBuilder().addSubcommand(new SlashCommandSubcommandBuilder("test", "test description"));

		describe("SlashCommandSubcommandGroupBuilder without subcommands", () => {
			test("GIVEN invalid builder THEN throw error", () => {
				expect(() => new SlashCommandSubcommandGroupBuilder("", "test description")).toThrowError();

				expect(() => new SlashCommandSubcommandGroupBuilder("test", "")).toThrowError();
			});

			test("GIVEN valid builder THEN does not throw error", () => {
				expect(() => createBuilder()).not.toThrowError();

				expect(() => createBuilder().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandSubcommandGroupBuilder with subcommands", () => {
			test("GIVEN valid builder with subcommands THEN does not throw error", () => {
				expect(() => createBuilderWithSubcommand()).not.toThrowError();

				expect(() => createBuilderWithSubcommand().toJSON()).not.toThrowError();
			});
		});
	});

	describe("SlashCommandOptionBuilder", () => {
		const createBuilder = (type: SlashCommandOptionBuilder.Type) =>
			new SlashCommandOptionBuilder("test", type, "test description");

		test("GIVEN invalid builder THEN throw error", () => {
			expect(
				() =>
					new SlashCommandOptionBuilder(
						"test",
						ApplicationCommandOptionType.Subcommand as SlashCommandOptionBuilder.Type,
						"test"
					)
			).toThrowError();

			expect(
				() => new SlashCommandOptionBuilder("", ApplicationCommandOptionType.String, "test description")
			).toThrowError();

			expect(() => new SlashCommandOptionBuilder("test", ApplicationCommandOptionType.String, "")).toThrowError();
		});

		test("GIVEN valid builder THEN does not throw error", () => {
			expect(() => createBuilder(ApplicationCommandOptionType.Attachment)).not.toThrowError();

			expect(() => createBuilder(ApplicationCommandOptionType.Attachment).toJSON()).not.toThrowError();
		});
	});
});
