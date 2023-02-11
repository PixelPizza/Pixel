import type { APIApplicationCommandNumberOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandNumberOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Number> {
	public constructor(name: string, description: string, options?: SlashCommandNumberOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Number, description, options);
	}

	public toJSON(): APIApplicationCommandNumberOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandNumberOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
