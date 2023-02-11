import type { APIApplicationCommandBooleanOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandBooleanOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandBooleanOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandBooleanOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.Boolean
		};
	}
}

export namespace SlashCommandBooleanOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
