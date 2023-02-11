import type { APIApplicationCommandRoleOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandRoleOptionBuilder {
	readonly #name: string;
	readonly #description: string;

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public toJSON(): APIApplicationCommandRoleOption {
		return {
			type: ApplicationCommandOptionType.Role,
			name: this.#name,
			description: this.#description
		};
	}
}
