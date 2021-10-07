"use strict";

const ResourceManager = require("../ResourceManager");

class SuperContestEffectManager extends ResourceManager {
	constructor(client) {
		super(client, "super-contest-effect");
	}
}

module.exports = SuperContestEffectManager;
