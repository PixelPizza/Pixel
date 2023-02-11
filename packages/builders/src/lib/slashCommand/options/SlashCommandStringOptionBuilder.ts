import type { APIApplicationCommandStringOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandStringOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandStringOption {
		return {
			type: ApplicationCommandOptionType.String,
			name: this.#name,
			description: this.#description
		};
	}
}
