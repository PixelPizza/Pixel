import type { APIApplicationCommandRoleOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandRoleOptionBuilder extends BaseSlashCommandOptionBuilder<ApplicationCommandOptionType.Role> {
	public constructor(name: string, description: string, options?: SlashCommandRoleOptionBuilder.Options) {
		super(name, ApplicationCommandOptionType.Role, description, options);
	}

	public toJSON(): APIApplicationCommandRoleOption {
		return {
			...super.toJSON()
		};
	}
}

export namespace SlashCommandRoleOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
