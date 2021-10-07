"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokemonFormManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokemon-form");
	}
}

module.exports = PokemonFormManager;
