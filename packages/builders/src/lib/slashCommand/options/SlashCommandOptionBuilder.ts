import type { APIApplicationCommandBasicOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandAttachmentOptionBuilder } from "./SlashCommandAttachmentOptionBuilder";
import { SlashCommandBooleanOptionBuilder } from "./SlashCommandBooleanOptionBuilder";
import { SlashCommandChannelOptionBuilder } from "./SlashCommandChannelOptionBuilder";
import { SlashCommandIntegerOptionBuilder } from "./SlashCommandIntegerOptionBuilder";
import { SlashCommandMentionableOptionBuilder } from "./SlashCommandMentionableOptionBuilder";
import { SlashCommandNumberOptionBuilder } from "./SlashCommandNumberOptionBuilder";
import { SlashCommandRoleOptionBuilder } from "./SlashCommandRoleOptionBuilder";
import { SlashCommandStringOptionBuilder } from "./SlashCommandStringOptionBuilder";
import { SlashCommandUserOptionBuilder } from "./SlashCommandUserOptionBuilder";

interface SlashCommandOptionBuilderBuilders {
	[ApplicationCommandOptionType.Attachment]: SlashCommandAttachmentOptionBuilder;
	[ApplicationCommandOptionType.Boolean]: SlashCommandBooleanOptionBuilder;
	[ApplicationCommandOptionType.Channel]: SlashCommandChannelOptionBuilder;
	[ApplicationCommandOptionType.Integer]: SlashCommandIntegerOptionBuilder;
	[ApplicationCommandOptionType.Mentionable]: SlashCommandMentionableOptionBuilder;
	[ApplicationCommandOptionType.Number]: SlashCommandNumberOptionBuilder;
	[ApplicationCommandOptionType.Role]: SlashCommandRoleOptionBuilder;
	[ApplicationCommandOptionType.String]: SlashCommandStringOptionBuilder;
	[ApplicationCommandOptionType.User]: SlashCommandUserOptionBuilder;
}

export class SlashCommandOptionBuilder<Name extends string, Type extends SlashCommandOptionBuilder.Type> {
	readonly #builder: SlashCommandOptionBuilderBuilders[SlashCommandOptionBuilder.Type];

	public constructor(name: Name, type: Type, description: string) {
		switch (type) {
			case ApplicationCommandOptionType.Attachment:
				this.#builder = new SlashCommandAttachmentOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.Boolean:
				this.#builder = new SlashCommandBooleanOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.Channel:
				this.#builder = new SlashCommandChannelOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.Integer:
				this.#builder = new SlashCommandIntegerOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.Mentionable:
				this.#builder = new SlashCommandMentionableOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.Number:
				this.#builder = new SlashCommandNumberOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.Role:
				this.#builder = new SlashCommandRoleOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.String:
				this.#builder = new SlashCommandStringOptionBuilder(name, description);
				break;
			case ApplicationCommandOptionType.User:
				this.#builder = new SlashCommandUserOptionBuilder(name, description);
				break;
			default:
				throw new Error(`Unknown option type: ${type}`);
		}
	}

	public toJSON(): APIApplicationCommandBasicOption {
		return this.#builder.toJSON();
	}
}

export namespace SlashCommandOptionBuilder {
	export type Type =
		| ApplicationCommandOptionType.Attachment
		| ApplicationCommandOptionType.Boolean
		| ApplicationCommandOptionType.Channel
		| ApplicationCommandOptionType.Integer
		| ApplicationCommandOptionType.Mentionable
		| ApplicationCommandOptionType.Number
		| ApplicationCommandOptionType.Role
		| ApplicationCommandOptionType.String
		| ApplicationCommandOptionType.User;
}
