"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class MoveTargetManager extends NamedResourceManager {
	constructor(client) {
		super(client, "move-target");
	}
}

module.exports = MoveTargetManager;
