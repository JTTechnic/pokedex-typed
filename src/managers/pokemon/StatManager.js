"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class StatManager extends NamedResourceManager {
	constructor(client) {
		super(client, "stat");
	}
}

module.exports = StatManager;
