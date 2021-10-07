"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokemonHabitatManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokemon-habitat");
	}
}

module.exports = PokemonHabitatManager;
