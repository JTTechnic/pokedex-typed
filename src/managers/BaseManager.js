"use strict";

const {Collection} = require("@discordjs/collection");
const fetch = require("node-fetch");
const Model = require("../Model");

/** @abstract */
class BaseManager {
	constructor(client, endpoint) {
		/**
		 * @name Manager#client
		 * @type {Client}
		 * @readonly
		 */
		Object.defineProperty(this, "client", {value: client});
		/**
		 * @name Manager#type
		 * @type {string}
		 * @private
		 * @readonly
		 */
		Object.defineProperty(this, "endpoint", {value: `${client.apiRoute}/${endpoint}`});
		/**
		 * @name Manager#cache
		 * @type {Collection}
		 * @readonly
		 */
		Object.defineProperty(this, "cache", {value: new Collection()});
	}

	async fetch(route) {
		return (await fetch(`${this.endpoint}/${route ?? ""}`)).json();
	}

	async fetchRandom() {
		const {url} = (
				await (
					await fetch(
						`${this.endpoint}?limit=1&offset=${Math.floor(Math.random() * (await this.fetchAmount()))}`
					)
				).json()
			).results[0],
			id = url.replace(`${this.endpoint}/`, "").replace("/", ""),
			result = this.cache.get(id) ?? new Model(await this.fetch(id));
		this.cache.set(id, result);
		return result;
	}

	async fetchAll(limit = 100, offset = 0) {
		return Promise.all(
			(await (await fetch(`${this.endpoint}?limit=${limit}&offset=${offset}`)).json()).results.map(result =>
				this.fetch(result.url.replace(this.endpoint, "").replaceAll("/", ""))
			)
		);
	}

	async fetchAmount() {
		if (!this._amount) {
			Object.defineProperty(this, "_amount", {
				value: (await (await fetch(`${this.endpoint}?limit=1`)).json()).count
			});
		}
		return this._amount;
	}
}

module.exports = BaseManager;
