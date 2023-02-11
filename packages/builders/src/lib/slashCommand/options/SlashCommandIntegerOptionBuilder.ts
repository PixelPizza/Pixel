import type { APIApplicationCommandIntegerOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandIntegerOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Integer> {
	public constructor(name: string, description: string, options?: SlashCommandIntegerOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Integer, description, options);
	}

	public toJSON(): APIApplicationCommandIntegerOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandIntegerOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
