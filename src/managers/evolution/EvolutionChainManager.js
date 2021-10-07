"use strict";

const ResourceManager = require("../ResourceManager");

class EvolutionChainManager extends ResourceManager {
	constructor(client) {
		super(client, "evolution-chain");
	}
}

module.exports = EvolutionChainManager;
