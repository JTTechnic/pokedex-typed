"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class NatureManager extends NamedResourceManager {
	constructor(client) {
		super(client, "nature");
	}
}

module.exports = NatureManager;
