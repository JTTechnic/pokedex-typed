"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class ItemPocketManager extends NamedResourceManager {
	constructor(client) {
		super(client, "item-pocket");
	}
}

module.exports = ItemPocketManager;
