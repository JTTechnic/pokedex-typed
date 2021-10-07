"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class EncounterConditionValueManager extends NamedResourceManager {
	constructor(client) {
		super(client, "encounter-condition-value");
	}
}

module.exports = EncounterConditionValueManager;
