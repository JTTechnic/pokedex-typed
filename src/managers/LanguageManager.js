"use strict";

const NamedResourceManager = require("./NamedResourceManager");

class LanguageManager extends NamedResourceManager {
	constructor(client) {
		super(client, "language");
	}
}

module.exports = LanguageManager;
