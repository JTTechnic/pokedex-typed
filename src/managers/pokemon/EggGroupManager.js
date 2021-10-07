"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class EggGroupManager extends NamedResourceManager {
	constructor(client) {
		super(client, "egg-group");
	}
}

module.exports = EggGroupManager;
