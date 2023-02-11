import type { APIApplicationCommandBasicOption, ApplicationCommandOptionType } from "discord-api-types/v10";

export class SlashCommandOptionBuilder<Name extends string, Type extends SlashCommandOptionBuilder.Type> {
	private readonly name: Name;
	private readonly type: Type;
	private readonly description: string;

	public constructor(name: Name, type: Type, options: SlashCommandOptionBuilder.Options) {
		this.name = name;
		this.type = type;
		this.description = options.description;
	}

	public toJSON(): APIApplicationCommandBasicOption {
		return {
			name: this.name,
			type: this.type,
			description: this.description
		} as APIApplicationCommandBasicOption;
	}
}

export namespace SlashCommandOptionBuilder {
	export type Type =
		| ApplicationCommandOptionType.Attachment
		| ApplicationCommandOptionType.Boolean
		| ApplicationCommandOptionType.Channel
		| ApplicationCommandOptionType.Integer
		| ApplicationCommandOptionType.Mentionable
		| ApplicationCommandOptionType.Number
		| ApplicationCommandOptionType.Role
		| ApplicationCommandOptionType.String
		| ApplicationCommandOptionType.User;

	export interface Options {
		description: string;
	}
}
