"use strict";

const ResourceManager = require("../ResourceManager");

class ContestEffectManager extends ResourceManager {
	constructor(client) {
		super(client, "contest-effect");
	}
}

module.exports = ContestEffectManager;
