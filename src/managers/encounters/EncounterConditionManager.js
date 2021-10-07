"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class EncounterConditionManager extends NamedResourceManager {
	constructor(client) {
		super(client, "encounter-condition");
	}
}

module.exports = EncounterConditionManager;
