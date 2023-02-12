import type { APIApplicationCommandNumberOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder } from "./BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder";

export class SlashCommandNumberOptionBuilder extends BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder<
	ApplicationCommandOptionType.Number,
	number
> {
	readonly #min_value?: number;
	readonly #max_value?: number;

	public constructor(name: string, description: string, options?: SlashCommandNumberOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Number, description, options);
		this.#min_value = options?.minValue;
		this.#max_value = options?.maxValue;
	}

	public toJSON(): APIApplicationCommandNumberOption {
		return {
			...super.toJSON(),
			min_value: this.#min_value,
			max_value: this.#max_value
		};
	}
}

export namespace SlashCommandNumberOptionBuilder {
	export interface Options extends BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder.Options<number> {
		minValue?: number;
		maxValue?: number;
	}
}
