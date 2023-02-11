import type { APIApplicationCommandNumberOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandNumberOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandNumberOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandNumberOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.Number
		};
	}
}

export namespace SlashCommandNumberOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
