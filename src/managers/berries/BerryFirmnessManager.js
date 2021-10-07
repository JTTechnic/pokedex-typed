"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class BerryFirmnessManager extends NamedResourceManager {
	constructor(client) {
		super(client, "berry-firmness");
	}
}

module.exports = BerryFirmnessManager;
