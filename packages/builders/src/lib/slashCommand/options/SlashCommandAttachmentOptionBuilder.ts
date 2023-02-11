import type { APIApplicationCommandAttachmentOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandAttachmentOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandAttachmentOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandAttachmentOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.Attachment
		};
	}
}

export namespace SlashCommandAttachmentOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
