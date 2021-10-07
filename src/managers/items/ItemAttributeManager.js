"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class ItemAttributeManager extends NamedResourceManager {
	constructor(client) {
		super(client, "item-attribute");
	}
}

module.exports = ItemAttributeManager;
