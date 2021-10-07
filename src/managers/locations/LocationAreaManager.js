"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class LocationAreaManager extends NamedResourceManager {
	constructor(client) {
		super(client, "location-area");
	}
}

module.exports = LocationAreaManager;
