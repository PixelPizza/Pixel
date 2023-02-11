import type { APIApplicationCommandUserOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandUserOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandUserOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandUserOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.User
		};
	}
}

export namespace SlashCommandUserOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
