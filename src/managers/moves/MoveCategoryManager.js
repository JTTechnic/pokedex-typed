"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class MoveCategoryManager extends NamedResourceManager {
	constructor(client) {
		super(client, "move-category");
	}
}

module.exports = MoveCategoryManager;
