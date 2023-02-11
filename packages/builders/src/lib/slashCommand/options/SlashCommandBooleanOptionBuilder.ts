import type { APIApplicationCommandBooleanOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandBooleanOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Boolean> {
	public constructor(name: string, description: string, options?: SlashCommandBooleanOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Boolean, description, options);
	}

	public toJSON(): APIApplicationCommandBooleanOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandBooleanOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
