"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokemonSpeciesManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokemon-species");
	}
}

module.exports = PokemonSpeciesManager;
