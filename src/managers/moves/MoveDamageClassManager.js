"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class MoveDamageClassManager extends NamedResourceManager {
	constructor(client) {
		super(client, "move-damage-class");
	}
}

module.exports = MoveDamageClassManager;
