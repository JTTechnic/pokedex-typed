"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class GenerationManager extends NamedResourceManager {
	constructor(client) {
		super(client, "generation");
	}
}

module.exports = GenerationManager;
