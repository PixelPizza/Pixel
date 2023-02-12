import type { APIApplicationCommandIntegerOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder } from "./BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder";

export class SlashCommandIntegerOptionBuilder extends BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder<
	ApplicationCommandOptionType.Integer,
	number
> {
	readonly #min_value?: number;
	readonly #max_value?: number;

	public constructor(name: string, description: string, options?: SlashCommandIntegerOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Integer, description, options);
		this.#min_value = options?.minValue;
		this.#max_value = options?.maxValue;
	}

	public toJSON(): APIApplicationCommandIntegerOption {
		return {
			...super.toJSON(),
			min_value: this.#min_value,
			max_value: this.#max_value
		};
	}
}

export namespace SlashCommandIntegerOptionBuilder {
	export interface Options extends BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder.Options<number> {
		minValue?: number;
		maxValue?: number;
	}
}
