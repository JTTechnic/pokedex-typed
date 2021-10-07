"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class GenderManager extends NamedResourceManager {
	constructor(client) {
		super(client, "gender");
	}
}

module.exports = GenderManager;
