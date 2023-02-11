import type { APIApplicationCommandAttachmentOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandAttachmentOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Attachment> {
	public constructor(name: string, description: string, options?: SlashCommandAttachmentOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Attachment, description, options);
	}

	public toJSON(): APIApplicationCommandAttachmentOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandAttachmentOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
