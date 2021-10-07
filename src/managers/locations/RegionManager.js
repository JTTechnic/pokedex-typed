"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class RegionManager extends NamedResourceManager {
	constructor(client) {
		super(client, "region");
	}
}

module.exports = RegionManager;
