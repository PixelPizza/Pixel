import type { APIApplicationCommandStringOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder } from "./BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder";

export class SlashCommandStringOptionBuilder extends BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder<
	ApplicationCommandOptionType.String,
	string
> {
	readonly #min_length?: number;
	readonly #max_length?: number;

	public constructor(name: string, description: string, options?: SlashCommandStringOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.String, description, options);
		this.#min_length = options?.minLength;
		this.#max_length = options?.maxLength;
	}

	public toJSON(): APIApplicationCommandStringOption {
		return {
			...super.toJSON(),
			min_length: this.#min_length,
			max_length: this.#max_length
		};
	}
}

export namespace SlashCommandStringOptionBuilder {
	export interface Options extends BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder.Options<string> {
		minLength?: number;
		maxLength?: number;
	}
}
