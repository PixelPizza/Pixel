import type { APIApplicationCommandBooleanOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandBooleanOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandBooleanOption {
		return {
			type: ApplicationCommandOptionType.Boolean,
			name: this.#name,
			description: this.#description
		};
	}
}
