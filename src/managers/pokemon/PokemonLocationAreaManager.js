"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PokemonLocationAreaManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokemon");
	}

	fetch(idOrName) {
		return super.fetch(idOrName, "encounters");
	}
}

module.exports = PokemonLocationAreaManager;
