"use strict";

const BaseManager = require("./BaseManager");
const Model = require("../Model");

/** @abstract */
class NamedResourceManager extends BaseManager {
	async fetch(idOrName, endpoint) {
		// eslint-disable-next-line no-shadow
		let model = this.cache.get(idOrName) ?? this.cache.find(model => model.name === idOrName);
		if (!model) {
			model = new Model(await super.fetch(`${idOrName}${endpoint ? `/${endpoint}` : ""}`));
			this.cache.set(model.id, model);
		}
		return model;
	}
}

module.exports = NamedResourceManager;
