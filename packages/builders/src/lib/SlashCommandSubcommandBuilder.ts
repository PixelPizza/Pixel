import {
	APIApplicationCommandBasicOption,
	APIApplicationCommandSubcommandOption,
	ApplicationCommandOptionType
} from "discord-api-types/v10";
import type { SlashCommandOptionBuilder } from "./SlashCommandOptionBuilder";

export class SlashCommandSubcommandBuilder {
	readonly #name: string;
	readonly #description: string;
	readonly #options: APIApplicationCommandBasicOption[] = [];

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public addOption(builder: SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>): this {
		this.#options.push(builder.toJSON());
		return this;
	}

	public toJSON(): APIApplicationCommandSubcommandOption {
		return {
			type: ApplicationCommandOptionType.Subcommand,
			name: this.#name,
			description: this.#description,
			options: this.#options
		};
	}
}
