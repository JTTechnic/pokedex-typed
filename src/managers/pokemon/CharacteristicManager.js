"use strict";

const ResourceManager = require("../ResourceManager");

class CharacteristicManager extends ResourceManager {
	constructor(client) {
		super(client, "characteristic");
	}
}

module.exports = CharacteristicManager;
