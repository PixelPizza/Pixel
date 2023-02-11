import type { APIApplicationCommandMentionableOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandMentionableOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Mentionable> {
	public constructor(name: string, description: string, options?: SlashCommandMentionableOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Mentionable, description, options);
	}

	public toJSON(): APIApplicationCommandMentionableOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandMentionableOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
