"use strict";

const ResourceManager = require("./ResourceManager");

class MachineManager extends ResourceManager {
	constructor(client) {
		super(client, "machine");
	}
}

module.exports = MachineManager;
