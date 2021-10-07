"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class MoveLearnMethodManager extends NamedResourceManager {
	constructor(client) {
		super(client, "move-learn-method");
	}
}

module.exports = MoveLearnMethodManager;
