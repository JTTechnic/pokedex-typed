"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class MoveBattleStyleManager extends NamedResourceManager {
	constructor(client) {
		super(client, "move-battle-style");
	}
}

module.exports = MoveBattleStyleManager;
