import type { APIApplicationCommandIntegerOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandIntegerOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandIntegerOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandIntegerOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.Integer
		};
	}
}

export namespace SlashCommandIntegerOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
