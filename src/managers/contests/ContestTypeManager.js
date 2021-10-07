"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class ContestTypeManager extends NamedResourceManager {
	constructor(client) {
		super(client, "contest-type");
	}
}

module.exports = ContestTypeManager;
