import type {
	APIApplicationCommandOption,
	LocaleString,
	Permissions,
	RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import type { SlashCommandOptionBuilder } from "./options/SlashCommandOptionBuilder";
import type { SlashCommandSubcommandBuilder } from "./SlashCommandSubcommandBuilder";
import type { SlashCommandSubcommandGroupBuilder } from "./SlashCommandSubcommandGroupBuilder";

export class SlashCommandBuilder<Options = null> {
	// noinspection JSUnusedLocalSymbols
	readonly #name: string;
	// noinspection JSUnusedLocalSymbols
	readonly #description: string;
	// noinspection JSUnusedLocalSymbols
	readonly #name_localizations?: Partial<Record<LocaleString, string>> | null;
	// noinspection JSUnusedLocalSymbols
	readonly #description_localizations?: Partial<Record<LocaleString, string>> | null;
	// noinspection JSUnusedLocalSymbols
	readonly #dm_permission?: boolean;
	// noinspection JSUnusedLocalSymbols
	readonly #default_member_permissions?: Permissions | null;
	// noinspection JSUnusedLocalSymbols
	readonly #options: APIApplicationCommandOption[] = [];

	public constructor(name: string, description: string, options?: SlashCommandBuilder.Options) {
		this.#name = name;
		this.#description = description;
		this.#name_localizations = options?.nameLocalizations;
		this.#description_localizations = options?.descriptionLocalizations;
		this.#dm_permission = options?.dmPermission;
		this.#default_member_permissions = options?.defaultMemberPermissions?.toString();
	}

	// noinspection JSUnusedLocalSymbols
	#addOption(
		builder:
			| SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>
			| SlashCommandSubcommandGroupBuilder
			| SlashCommandSubcommandBuilder
	) {
		this.#options.push(builder.toJSON());
		return this;
	}

	public addOption<Builder extends SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>>(
		builder: Builder
	): SlashCommandOptionOnlyBuilder<
		Options extends null
			? { [key in ReturnType<Builder["getName"]>]: Builder }
			: Options & { [key in ReturnType<Builder["getName"]>]: Builder }
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

export interface SlashCommandBuilder<Options = null> {
	/**
	 * @internal This method is only used for the typings and should not be used
	 */
	getOptions(): Options;
}

export namespace SlashCommandBuilder {
	export interface Options {
		nameLocalizations?: Partial<Record<LocaleString, string>> | null;
		descriptionLocalizations?: Partial<Record<LocaleString, string>> | null;
		dmPermission?: boolean;
		defaultMemberPermissions?: number | null;
	}
}

export type SlashCommandOptionOnlyBuilder<
	Options = Record<string, SlashCommandOptionBuilder<string, SlashCommandOptionBuilder.Type>>
> = Pick<SlashCommandBuilder<Options>, "addOption" | "toJSON">;
export type SlashCommandSubcommandOnlyBuilder = Pick<
	SlashCommandBuilder<Record<string, never>>,
	"addSubcommand" | "addSubcommandGroup" | "toJSON"
>;
