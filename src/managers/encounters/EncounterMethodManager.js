"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class EncounterMethodManager extends NamedResourceManager {
	constructor(client) {
		super(client, "encounter-method");
	}
}

module.exports = EncounterMethodManager;
