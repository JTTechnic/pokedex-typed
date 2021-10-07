"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokeathlonStatManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokeathlon-stat");
	}
}

module.exports = PokeathlonStatManager;
