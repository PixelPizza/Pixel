import type { APIApplicationCommandBasicOption, LocaleString } from "discord-api-types/v10";

export abstract class BaseSlashCommandOptionBuilder {
	readonly #name: string;
	readonly #description: string;
	readonly #name_localizations?: Partial<Record<LocaleString, string>> | null;
	readonly #description_localizations?: Partial<Record<LocaleString, string>> | null;

	protected constructor(name: string, description: string, options?: BaseSlashCommandOptionBuilder.Options) {
		this.#name = name;
		this.#description = description;
		this.#name_localizations = options?.nameLocalizations;
		this.#description_localizations = options?.descriptionLocalizations;
	}

	public toJSON(): Omit<APIApplicationCommandBasicOption, "type"> {
		return {
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
