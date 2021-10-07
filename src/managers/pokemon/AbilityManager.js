"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class AbilityManager extends NamedResourceManager {
	constructor(client) {
		super(client, "ability");
	}
}

module.exports = AbilityManager;
