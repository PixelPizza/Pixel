import { describe, expect } from "vitest";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import {
	SlashCommandBuilder,
	SlashCommandOptionBuilder,
	SlashCommandSubcommandBuilder,
	SlashCommandSubcommandGroupBuilder
} from "../src";

const createInvalidBuilder = () => new SlashCommandBuilder("", "");
const createValidBuilder = () => new SlashCommandBuilder("test", "test description");
const createValidBuilderWithOptionalParams = () =>
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
const createValidBuilderWithOptions = () =>
	createValidBuilder()
		.addOption(
			new SlashCommandOptionBuilder("attachment", ApplicationCommandOptionType.Attachment, "attachment option")
		)
		.addOption(new SlashCommandOptionBuilder("boolean", ApplicationCommandOptionType.Boolean, "boolean option"))
		.addOption(new SlashCommandOptionBuilder("channel", ApplicationCommandOptionType.Channel, "channel option"))
		.addOption(new SlashCommandOptionBuilder("integer", ApplicationCommandOptionType.Integer, "integer option"))
		.addOption(
			new SlashCommandOptionBuilder("mentionable", ApplicationCommandOptionType.Mentionable, "mentionable option")
		)
		.addOption(new SlashCommandOptionBuilder("number", ApplicationCommandOptionType.Number, "number option"))
		.addOption(new SlashCommandOptionBuilder("role", ApplicationCommandOptionType.Role, "role option"))
		.addOption(new SlashCommandOptionBuilder("string", ApplicationCommandOptionType.String, "string option"))
		.addOption(new SlashCommandOptionBuilder("user", ApplicationCommandOptionType.User, "user option"));
const createValidBuilderWithSubcommand = () =>
	createValidBuilder().addSubcommand(new SlashCommandSubcommandBuilder("subcommand", "subcommand description"));
const createValidBuilderWithSubcommandGroup = () =>
	createValidBuilder().addSubcommandGroup(
		new SlashCommandSubcommandGroupBuilder("subcommandgroup", "subcommandgroup description")
	);

describe("Slash Commands", () => {
	describe("SlashCommandBuilder", () => {
		describe("SlashCommandBuilder without options", () => {
			test("GIVEN invalid builder THEN throw error", () => {
				expect(() => createInvalidBuilder()).toThrowError();
			});

			test("GIVEN valid builder THEN does not throw error", () => {
				expect(() => createValidBuilder()).not.toThrowError();

				expect(() => createValidBuilder().toJSON()).not.toThrowError();
			});

			test("GIVEN valid builder with optional parameters THEN does not throw error", () => {
				expect(() => createValidBuilderWithOptionalParams()).not.toThrowError();

				expect(() => createValidBuilderWithOptionalParams().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandBuilder with simple options", () => {
			test("GIVEN valid builder with options THEN does not throw error", () => {
				expect(() => createValidBuilderWithOptions()).not.toThrowError();

				expect(() => createValidBuilderWithOptions().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandBuilder with subcommands", () => {
			test("GIVEN valid builder with subcommands THEN does not throw error", () => {
				expect(() => createValidBuilderWithSubcommand()).not.toThrowError();

				expect(() => createValidBuilderWithSubcommand().toJSON()).not.toThrowError();
			});
		});

		describe("SlashCommandBuilder with subcommand groups", () => {
			test("GIVEN valid builder with subcommand groups THEN does not throw error", () => {
				expect(() => createValidBuilderWithSubcommandGroup()).not.toThrowError();

				expect(() => createValidBuilderWithSubcommandGroup().toJSON()).not.toThrowError();
			});
		});
	});
});
