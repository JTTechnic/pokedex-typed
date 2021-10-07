"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class BerryFlavorManager extends NamedResourceManager {
	constructor(client) {
		super(client, "berry-flavor");
	}
}

module.exports = BerryFlavorManager;
