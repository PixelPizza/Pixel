import {
	APIApplicationCommandBasicOption,
	APIApplicationCommandSubcommandOption,
	ApplicationCommandOptionType
} from "discord-api-types/v10";
import type { SlashCommandOptionBuilder } from "./options/SlashCommandOptionBuilder";

export class SlashCommandSubcommandBuilder<Options = null> {
	readonly #name: string;
	readonly #description: string;
	readonly #options: APIApplicationCommandBasicOption[] = [];

	public constructor(name: string, description: string) {
		this.#name = name;
		this.#description = description;
	}

	public addOption<
		Builder extends SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>,
		Name extends Builder extends SlashCommandOptionBuilder<infer Name, SlashCommandOptionBuilder.Type>
			? Name
			: never
	>(
		builder: Builder
	): SlashCommandSubcommandBuilder<
		Options extends null ? { [key in Name]: Builder } : Options & { [key in Name]: Builder }
	> {
		this.#options.push(builder.toJSON());
		return this as unknown as SlashCommandSubcommandBuilder<
			Options extends null ? { [key in Name]: Builder } : Options & { [key in Name]: Builder }
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
