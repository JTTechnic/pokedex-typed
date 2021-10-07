"use strict";

const NamedResourceManager = require("../NamedResourceManager");

class TypeManager extends NamedResourceManager {
	constructor(client) {
		super(client, "type");
	}
}

module.exports = TypeManager;
