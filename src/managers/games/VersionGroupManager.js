"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class VersionGroupManager extends NamedResourceManager {
	constructor(client) {
		super(client, "version-group");
	}
}

module.exports = VersionGroupManager;
