import type { APIApplicationCommandChannelOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandChannelOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Channel> {
	public constructor(name: string, description: string, options?: SlashCommandChannelOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Channel, description, options);
	}

	public toJSON(): APIApplicationCommandChannelOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandChannelOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
