import type { APIApplicationCommandBasicOption, LocaleString } from "discord-api-types/v10";
import type { SlashCommandOptionBuilder } from "./SlashCommandOptionBuilder";

export abstract class BaseSlashCommandOptionBuilder<Type extends SlashCommandOptionBuilder.Type> {
	readonly #type: Type;
	readonly #name: string;
	readonly #description: string;
	readonly #name_localizations?: Partial<Record<LocaleString, string>> | null;
	readonly #description_localizations?: Partial<Record<LocaleString, string>> | null;

	protected constructor(
		name: string,
		type: Type,
		description: string,
		options?: BaseSlashCommandOptionBuilder.Options
	) {
		this.#name = name;
		this.#type = type;
		this.#description = description;
		this.#name_localizations = options?.nameLocalizations;
		this.#description_localizations = options?.descriptionLocalizations;
	}

	public toJSON(): Omit<APIApplicationCommandBasicOption, "type"> & { type: Type } {
		return {
			type: this.#type,
			name: this.#name,
			description: this.#description,
			name_localizations: this.#name_localizations,
			description_localizations: this.#description_localizations
		};
	}
}

export namespace BaseSlashCommandOptionBuilder {
	export interface Options {
		nameLocalizations?: Partial<Record<LocaleString, string>> | null;
		descriptionLocalizations?: Partial<Record<LocaleString, string>> | null;
	}
}
