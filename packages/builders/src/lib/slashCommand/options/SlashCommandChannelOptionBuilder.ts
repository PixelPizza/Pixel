import type { APIApplicationCommandChannelOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType, ChannelType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandChannelOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Channel> {
	readonly #channel_types?: Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>[];

	public constructor(name: string, description: string, options?: SlashCommandChannelOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Channel, description, options);
		this.#channel_types = options?.channelTypes;
	}

	public toJSON(): APIApplicationCommandChannelOption {
		return {
			...super.toJSON(),
			channel_types: this.#channel_types
		};
	}
}

export namespace SlashCommandChannelOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {
		channelTypes?: Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>[];
	}
}
