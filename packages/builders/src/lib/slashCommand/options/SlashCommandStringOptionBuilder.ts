import type { APIApplicationCommandStringOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandStringOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.String> {
	public constructor(name: string, description: string, options?: SlashCommandStringOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.String, description, options);
	}

	public toJSON(): APIApplicationCommandStringOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandStringOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
