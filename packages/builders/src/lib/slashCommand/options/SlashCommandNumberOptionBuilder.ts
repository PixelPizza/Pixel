import type { APIApplicationCommandNumberOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandNumberOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandNumberOption {
		return {
			type: ApplicationCommandOptionType.Number,
			name: this.#name,
			description: this.#description
		};
	}
}
