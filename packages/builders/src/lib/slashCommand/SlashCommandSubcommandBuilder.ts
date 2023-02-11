import {
	APIApplicationCommandBasicOption,
	APIApplicationCommandSubcommandOption,
	ApplicationCommandOptionType
} from "discord-api-types/v10";
import type { SlashCommandOptionBuilder } from "./options/SlashCommandOptionBuilder";

export class SlashCommandSubcommandBuilder<Options = null> {
	// noinspection JSUnusedLocalSymbols
	readonly #name: string;
	// noinspection JSUnusedLocalSymbols
	readonly #description: string;
	// noinspection JSUnusedLocalSymbols
	readonly #options: APIApplicationCommandBasicOption[] = [];

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public addOption<Builder extends SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>>(
		builder: Builder
	): SlashCommandSubcommandBuilder<
		Options extends null
			? { [key in ReturnType<Builder["getName"]>]: Builder }
			: Options & { [key in ReturnType<Builder["getName"]>]: Builder }
	> {
		this.#options.push(builder.toJSON());
		return this as unknown as SlashCommandSubcommandBuilder<
			Options extends null
				? { [key in ReturnType<Builder["getName"]>]: Builder }
				: Options & { [key in ReturnType<Builder["getName"]>]: Builder }
		>;
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

export interface SlashCommandSubcommandBuilder<Options = null> {
	/**
	 * @internal This method is only used for the typings and should not be used
	 */
	getOptions(): Options;
}
