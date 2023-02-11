import type {
	APIApplicationCommandSubcommandGroupOption,
	APIApplicationCommandSubcommandOption
} from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import type { SlashCommandSubcommandBuilder } from "./SlashCommandSubcommandBuilder";

export class SlashCommandSubcommandGroupBuilder {
	private readonly name: string;
	private readonly description: string;
	private readonly options: APIApplicationCommandSubcommandOption[] = [];

	public constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}

	public addSubcommand(subcommand: SlashCommandSubcommandBuilder): this {
		this.options.push(subcommand.toJSON());
		return this;
	}

	public toJSON(): APIApplicationCommandSubcommandGroupOption {
		return {
			type: ApplicationCommandOptionType.SubcommandGroup,
			name: this.name,
			description: this.description,
			options: this.options
		};
	}
}
