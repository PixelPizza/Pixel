import type {
	APIApplicationCommandOption,
	LocaleString,
	Permissions,
	RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import type { SlashCommandOptionBuilder } from "./options/SlashCommandOptionBuilder";
import type { SlashCommandSubcommandBuilder } from "./SlashCommandSubcommandBuilder";
import type { SlashCommandSubcommandGroupBuilder } from "./SlashCommandSubcommandGroupBuilder";
import { ApplicationCommandType } from "discord-api-types/v10";

export class SlashCommandBuilder<Options = null> {
	readonly #type = ApplicationCommandType.ChatInput;
	readonly #name: string;
	readonly #description: string;
	readonly #name_localizations?: Partial<Record<LocaleString, string>> | null;
	readonly #description_localizations?: Partial<Record<LocaleString, string>> | null;
	readonly #dm_permission?: boolean;
	readonly #default_member_permissions?: Permissions | null;
	readonly #nsfw?: boolean;
	readonly #options: APIApplicationCommandOption[] = [];

	public constructor(name: string, description: string, options?: SlashCommandBuilder.Options) {
		this.#name = name;
		this.#description = description;
		this.#name_localizations = options?.nameLocalizations;
		this.#description_localizations = options?.descriptionLocalizations;
		this.#dm_permission = options?.dmPermission;
		this.#default_member_permissions = options?.defaultMemberPermissions?.toString();
		this.#nsfw = options?.nsfw;
	}

	#addOption(
		builder:
			| SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>
			| SlashCommandSubcommandGroupBuilder
			| SlashCommandSubcommandBuilder
	) {
		this.#options.push(builder.toJSON());
		return this;
	}

	public addOption<
		Builder extends SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>,
		Name extends Builder extends SlashCommandOptionBuilder<infer Name, SlashCommandOptionBuilder.Type>
			? Name
			: never
	>(
		builder: Builder
	): SlashCommandOptionOnlyBuilder<
		Options extends null ? { [key in Name]: Builder } : Options & { [key in Name]: Builder }
	> {
		return this.#addOption(builder);
	}

	public addSubcommand(builder: SlashCommandSubcommandBuilder): SlashCommandSubcommandOnlyBuilder {
		return this.#addOption(builder);
	}

	public addSubcommandGroup(builder: SlashCommandSubcommandGroupBuilder): SlashCommandSubcommandOnlyBuilder {
		return this.#addOption(builder);
	}

	public toJSON(): RESTPostAPIChatInputApplicationCommandsJSONBody {
		return {
			type: this.#type,
			name: this.#name,
			description: this.#description,
			name_localizations: this.#name_localizations,
			description_localizations: this.#description_localizations,
			dm_permission: this.#dm_permission,
			default_member_permissions: this.#default_member_permissions,
			nsfw: this.#nsfw,
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
		nsfw?: boolean;
	}
}

export type SlashCommandOptionOnlyBuilder<
	Options = Record<string, SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>>
> = Pick<SlashCommandBuilder<Options>, "addOption" | "toJSON">;
export type SlashCommandSubcommandOnlyBuilder = Pick<
	SlashCommandBuilder<Record<string, never>>,
	"addSubcommand" | "addSubcommandGroup" | "toJSON"
>;
