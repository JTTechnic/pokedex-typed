"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class ItemCategoryManager extends NamedResourceManager {
	constructor(client) {
		super(client, "item-category");
	}
}

module.exports = ItemCategoryManager;
