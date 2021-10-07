"use strict";

const LocationAreaManager = require("./LocationAreaManager");
const PalParkAreaManager = require("./PalParkAreaManager");
const RegionManager = require("./RegionManager");
const NamedResourceManager = require("../NamedResourceManager");

class LocationManager extends NamedResourceManager {
	constructor(client) {
		super(client, "location");

		/**
		 * @name LocationManager#areas
		 * @type {LocationAreaManager}
		 * @readonly
		 */
		Object.defineProperty(this, "areas", {value: new LocationAreaManager(client)});

		/**
		 * @name LocationAreaManager#palpark
		 * @type {PalParkAreaManager}
		 * @readonly
		 */
		Object.defineProperty(this, "palpark", {value: new PalParkAreaManager(client)});
		/**
		 * @name LocationManager#regions
		 * @type {RegionManager}
		 * @readonly
		 */
		Object.defineProperty(this, "regions", {value: new RegionManager(client)});
	}
}

module.exports = LocationManager;
