"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class MoveAilmentManager extends NamedResourceManager {
	constructor(client) {
		super(client, "move-ailment");
	}
}

module.exports = MoveAilmentManager;
