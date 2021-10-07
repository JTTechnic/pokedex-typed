"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokemonColorManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokemon-color");
	}
}

module.exports = PokemonColorManager;
