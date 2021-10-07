"use strict";

const ItemAttributeManager = require("./ItemAttributeManager");
const ItemCategoryManager = require("./ItemCategoryManager");
const ItemFlingEffectManager = require("./ItemFlingEffectManager");
const ItemPocketManager = require("./ItemPocketManager");
const NamedResourceManager = require("../NamedResourceManager");

class ItemManager extends NamedResourceManager {
	constructor(client) {
		super(client, "item");

		/**
		 * @name ItemManager#attributes
		 * @type {ItemAttributeManager}
		 * @readonly
		 */
		Object.defineProperty(this, "attributes", {value: new ItemAttributeManager(client)});
		/**
		 * @name ItemManager#categories
		 * @type {ItemCategoryManager}
		 * @readonly
		 */
		Object.defineProperty(this, "categories", {value: new ItemCategoryManager(client)});
		/**
		 * @name ItemManager#flingEffects
		 * @type {ItemFlingEffectManager}
		 * @readonly
		 */
		Object.defineProperty(this, "flingEffects", {value: new ItemFlingEffectManager(client)});
		/**
		 * @name ItemManager#pockets
		 * @type {ItemPocketManager}
		 * @readonly
		 */
		Object.defineProperty(this, "pockets", {value: new ItemPocketManager(client)});
	}
}

module.exports = ItemManager;
