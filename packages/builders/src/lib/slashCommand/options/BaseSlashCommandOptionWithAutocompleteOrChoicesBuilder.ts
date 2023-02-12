import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";
import type {
	APIApplicationCommandOptionChoice,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIApplicationCommandOptionBase,
	ApplicationCommandOptionType
} from "discord-api-types/v10";

export abstract class BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder<
	Type extends BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder.Type,
	ValueType extends string | number
> extends BaseSlashCommandOptionBuilder<Type> {
	readonly #choices?: APIApplicationCommandOptionChoice<ValueType>[];
	readonly #autocomplete?: boolean;

	protected constructor(
		name: string,
		type: Type,
		description: string,
		options?: BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder.Options<ValueType>
	) {
		super(name, type, description, options);
		this.#choices = options?.choices;
		this.#autocomplete = options?.autocomplete;
	}

	public toJSON(): APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
		APIApplicationCommandOptionBase<Type>,
		APIApplicationCommandOptionChoice<ValueType>
	> {
		return {
			...super.toJSON(),
			choices: this.#choices,
			autocomplete: this.#autocomplete
		};
	}
}

export namespace BaseSlashCommandOptionWithAutocompleteOrChoicesBuilder {
	export type Type =
		| ApplicationCommandOptionType.Integer
		| ApplicationCommandOptionType.Number
		| ApplicationCommandOptionType.String;

	export interface Options<ValueType extends string | number> extends BaseSlashCommandOptionBuilder.Options {
		choices?: APIApplicationCommandOptionChoice<ValueType>[];
		autocomplete?: boolean;
	}
}
