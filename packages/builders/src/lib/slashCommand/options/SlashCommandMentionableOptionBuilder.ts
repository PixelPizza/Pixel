import type { APIApplicationCommandMentionableOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandMentionableOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandMentionableOption {
		return {
			type: ApplicationCommandOptionType.Mentionable,
			name: this.#name,
			description: this.#description
		};
	}
}
