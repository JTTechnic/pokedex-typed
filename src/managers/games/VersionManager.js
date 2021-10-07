"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class VersionManager extends NamedResourceManager {
	constructor(client) {
		super(client, "version");
	}
}

module.exports = VersionManager;
