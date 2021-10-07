"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class ItemFlingEffectManager extends NamedResourceManager {
	constructor(client) {
		super(client, "item-fling-effect");
	}
}

module.exports = ItemFlingEffectManager;
