import type {
	APIApplicationCommandOption,
	LocaleString,
	Permissions,
	RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import type { SlashCommandOptionBuilder } from "./SlashCommandOptionBuilder";
import type { SlashCommandSubcommandBuilder } from "./SlashCommandSubcommandBuilder";
import type { SlashCommandSubcommandGroupBuilder } from "./SlashCommandSubcommandGroupBuilder";

export class SlashCommandBuilder {
	readonly #name: string;
	readonly #description: string;
	readonly #name_localizations?: Partial<Record<LocaleString, string>> | null;
	readonly #description_localizations?: Partial<Record<LocaleString, string>> | null;
	readonly #dm_permission?: boolean;
	readonly #default_member_permissions?: Permissions | null;
	readonly #options: APIApplicationCommandOption[] = [];

	public constructor(name: string, description: string, options?: SlashCommandBuilder.Options) {
		this.#name = name;
		this.#description = description;
		this.#name_localizations = options?.nameLocalizations;
		this.#description_localizations = options?.descriptionLocalizations;
		this.#dm_permission = options?.dmPermission;
		this.#default_member_permissions = options?.defaultMemberPermissions?.toString();
	}

	public addOption(
		builder: SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>
	): SlashCommandOptionOnlyBuilder {
		this.#options.push(builder.toJSON());
		return this;
	}

	public addSubcommand(builder: SlashCommandSubcommandBuilder): SlashCommandSubcommandOnlyBuilder {
		this.#options.push(builder.toJSON());
		return this;
	}

	public addSubcommandGroup(builder: SlashCommandSubcommandGroupBuilder): SlashCommandSubcommandOnlyBuilder {
		this.#options.push(builder.toJSON());
		return this;
	}

	public toJSON(): RESTPostAPIChatInputApplicationCommandsJSONBody {
		return {
			name: this.#name,
			description: this.#description,
			name_localizations: this.#name_localizations,
			description_localizations: this.#description_localizations,
			dm_permission: this.#dm_permission,
			default_member_permissions: this.#default_member_permissions,
			options: this.#options
		};
	}
}

export namespace SlashCommandBuilder {
	export interface Options {
		nameLocalizations?: Partial<Record<LocaleString, string>> | null;
		descriptionLocalizations?: Partial<Record<LocaleString, string>> | null;
		dmPermission?: boolean;
		defaultMemberPermissions?: number | null;
	}
}

export type SlashCommandOptionOnlyBuilder = Pick<SlashCommandBuilder, "addOption" | "toJSON">;
export type SlashCommandSubcommandOnlyBuilder = Pick<
	SlashCommandBuilder,
	"addSubcommand" | "addSubcommandGroup" | "toJSON"
>;
