import type { APIApplicationCommandStringOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandStringOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandStringOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandStringOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.String
		};
	}
}

export namespace SlashCommandStringOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
