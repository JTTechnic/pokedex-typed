"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class GrowthRateManager extends NamedResourceManager {
	constructor(client) {
		super(client, "growth-rate");
	}
}

module.exports = GrowthRateManager;
