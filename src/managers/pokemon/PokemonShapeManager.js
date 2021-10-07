"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokemonShapeManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokemon-shape");
	}
}

module.exports = PokemonShapeManager;
