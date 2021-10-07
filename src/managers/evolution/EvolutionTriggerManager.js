"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class EvolutionTriggerManager extends NamedResourceManager {
	constructor(client) {
		super(client, "evolution-trigger");
	}
}

module.exports = EvolutionTriggerManager;
