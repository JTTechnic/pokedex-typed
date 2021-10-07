"use strict";

const {Collection} = require("@discordjs/collection");
const fetch = require("node-fetch");

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
		Object.defineProperty(this, "endpoint", {value: endpoint});
		/**
		 * @name Manager#cache
		 * @type {Collection}
		 * @readonly
		 */
		Object.defineProperty(this, "cache", {value: new Collection()});
	}

	async fetch(route) {
		return (await fetch(`${this.client.apiRoute}/${this.endpoint}/${route ?? ""}`)).json();
	}
}

module.exports = BaseManager;
