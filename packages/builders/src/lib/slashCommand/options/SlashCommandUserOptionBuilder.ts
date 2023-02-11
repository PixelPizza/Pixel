import type { APIApplicationCommandUserOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandUserOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandUserOption {
		return {
			type: ApplicationCommandOptionType.User,
			name: this.#name,
			description: this.#description
		};
	}
}
