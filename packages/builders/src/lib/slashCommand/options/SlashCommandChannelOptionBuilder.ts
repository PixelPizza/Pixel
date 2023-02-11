import type { APIApplicationCommandChannelOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandChannelOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandChannelOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandChannelOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.Channel
		};
	}
}

export namespace SlashCommandChannelOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
