import type { APIApplicationCommandRoleOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { BaseSlashCommandOptionBuilder } from "./BaseSlashCommandOptionBuilder";

export class SlashCommandRoleOptionBuilder extends BaseSlashCommandOptionBuilder {
	public constructor(name: string, description: string, options?: SlashCommandRoleOptionBuilder.Options) {
		super(name, description, options);
	}

	public toJSON(): APIApplicationCommandRoleOption {
		return {
			...super.toJSON(),
			type: ApplicationCommandOptionType.Role
		};
	}
}

export namespace SlashCommandRoleOptionBuilder {
	export interface Options extends BaseSlashCommandOptionBuilder.Options {}
}
