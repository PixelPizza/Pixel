import type { APIApplicationCommandIntegerOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandIntegerOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandIntegerOption {
		return {
			type: ApplicationCommandOptionType.Integer,
			name: this.#name,
			description: this.#description
		};
	}
}
