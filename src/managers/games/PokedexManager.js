"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokedexManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokedex");
	}
}

module.exports = PokedexManager;
