"use strict";

const BerryFirmnessManager = require("./BerryFirmnessManager");
const BerryFlavorManager = require("./BerryFlavorManager");
const NamedResourceManager = require("../NamedResourceManager");

class BerryManager extends NamedResourceManager {
	constructor(client) {
		super(client, "berry");

		/**
		 * @name BerryManager#firmness
		 * @type {BerryFirmnessManager}
		 * @readonly
		 */
		Object.defineProperty(this, "firmness", {value: new BerryFirmnessManager(client)});
		/**
		 * @name BerryManager#flavor
		 * @type {BerryFlavorManager}
		 * @readonly
		 */
		Object.defineProperty(this, "flavor", {value: new BerryFlavorManager(client)});
	}
}

module.exports = BerryManager;
