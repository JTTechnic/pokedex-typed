"use strict";

const BaseManager = require("./BaseManager");
const Model = require("../Model");

/** @abstract */
class ResourceManager extends BaseManager {
	async fetch(id, endpoint) {
		if (!this.cache.has(id)) {
			this.cache.set(id, new Model(await super.fetch(`${id}${endpoint ? `/${endpoint}` : ""}`)));
		}
		return this.cache.get(id);
	}
}

module.exports = ResourceManager;
