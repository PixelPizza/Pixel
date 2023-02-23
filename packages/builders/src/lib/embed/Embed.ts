import type { APIEmbed } from "discord-api-types/v10";

export interface EmbedFooter {
	text: string;
	iconUrl?: string;
	proxyIconUrl?: string;
}

export interface EmbedImage {
	url: string;
	proxyUrl?: string;
	height?: number;
	width?: number;
}

export interface EmbedAuthor {
	name: string;
	url?: string;
	iconUrl?: string;
	proxyIconUrl?: string;
}

export interface EmbedField {
	name: string;
	value: string;
	inline?: boolean;
}

export class EmbedBuilder {
	readonly #data: APIEmbed;

	public constructor(options: EmbedBuilder.Options = {}) {
		this.#data = {
			title: options.title,
			description: options.description,
			url: options.url,
			timestamp: options.timestamp?.toISOString(),
			color: options.color,
			footer: options.footer
				? {
						text: options.footer.text,
						icon_url: options.footer.iconUrl,
						proxy_icon_url: options.footer.proxyIconUrl
				  }
				: undefined,
			image: options.image
				? {
						url: options.image.url,
						proxy_url: options.image.proxyUrl,
						width: options.image.width,
						height: options.image.height
				  }
				: undefined,
			thumbnail: options.thumbnail
				? {
						url: options.thumbnail.url,
						proxy_url: options.thumbnail.proxyUrl,
						width: options.thumbnail.width,
						height: options.thumbnail.height
				  }
				: undefined,
			author: options.author
				? {
						name: options.author.name,
						url: options.author.url,
						icon_url: options.author.iconUrl,
						proxy_icon_url: options.author.proxyIconUrl
				  }
				: undefined,
			fields: options.fields
		};
	}

	public toJSON(): APIEmbed {
		return { ...this.#data };
	}
}

export namespace EmbedBuilder {
	export interface Options {
		title?: string;
		description?: string;
		url?: string;
		timestamp?: Date;
		color?: number;
		footer?: EmbedFooter;
		image?: EmbedImage;
		thumbnail?: EmbedImage;
		author?: EmbedAuthor;
		fields?: EmbedField[];
	}
}
