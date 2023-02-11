import type { APIApplicationCommandAttachmentOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandAttachmentOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandAttachmentOption {
		return {
			type: ApplicationCommandOptionType.Attachment,
			name: this.#name,
			description: this.#description
		};
	}
}
