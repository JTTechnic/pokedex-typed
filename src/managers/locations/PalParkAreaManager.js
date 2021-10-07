"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class PalParkAreaManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pal-park-area");
	}
}

module.exports = PalParkAreaManager;
