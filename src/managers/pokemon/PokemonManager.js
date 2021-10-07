"use strict";

const AbilityManager = require("./AbilityManager");
const CharacteristicManager = require("./CharacteristicManager");
const EggGroupManager = require("./EggGroupManager");
const GenderManager = require("./GenderManager");
const GrowthRateManager = require("./GrowthRateManager");
const NatureManager = require("./NatureManager");
const PokeathlonStatManager = require("./PokeathlonStatManager");
const PokemonColorManager = require("./PokemonColorManager");
const PokemonFormManager = require("./PokemonFormManager");
const PokemonHabitatManager = require("./PokemonHabitatManager");
const PokemonLocationAreaManager = require("./PokemonLocationAreaManager");
const PokemonShapeManager = require("./PokemonShapeManager");
const PokemonSpeciesManager = require("./PokemonSpeciesManager");
const StatManager = require("./StatManager");
const TypeManager = require("./TypeManager");
const NamedResourceManager = require("../NamedResourceManager");

class PokemonManager extends NamedResourceManager {
	constructor(client) {
		super(client, "pokemon");

		/**
		 * @name PokemonManager#abilities
		 * @type {AbilityManager}
		 * @readonly
		 */
		Object.defineProperty(this, "abilities", {value: new AbilityManager(client)});
		/**
		 * @name PokemonManager#characteristics
		 * @type {CharacteristicManager}
		 * @readonly
		 */
		Object.defineProperty(this, "characteristics", {value: new CharacteristicManager(client)});
		/**
		 * @name PokemonManager#eggGroups
		 * @type {EggGroupManager}
		 * @readonly
		 */
		Object.defineProperty(this, "eggGroups", {value: new EggGroupManager(client)});
		/**
		 * @name PokemonManager#genders
		 * @type {GenderManager}
		 * @readonly
		 */
		Object.defineProperty(this, "genders", {value: new GenderManager(client)});
		/**
		 * @name PokemonManager#growthRates
		 * @type {GrowthRateManager}
		 * @readonly
		 */
		Object.defineProperty(this, "growthRates", {value: new GrowthRateManager(client)});
		/**
		 * @name PokemonManager#natures
		 * @type {NatureManager}
		 * @readonly
		 */
		Object.defineProperty(this, "natures", {value: new NatureManager(client)});
		/**
		 * @name PokemonManager#pokeathlonStats
		 * @type {PokeathlonStatManager}
		 * @readonly
		 */
		Object.defineProperty(this, "pokeathlonStats", {value: new PokeathlonStatManager(client)});
		/**
		 * @name PokemonManager#colors
		 * @type {PokemonColorManager}
		 * @readonly
		 */
		Object.defineProperty(this, "colors", {value: new PokemonColorManager(client)});
		/**
		 * @name PokemonManager#forms
		 * @type {PokemonFormManager}
		 * @readonly
		 */
		Object.defineProperty(this, "forms", {value: new PokemonFormManager(client)});
		/**
		 * @name PokemonManager#habitats
		 * @type {PokemonHabitatManager}
		 * @readonly
		 */
		Object.defineProperty(this, "habitats", {value: new PokemonHabitatManager(client)});
		/**
		 * @name PokemonManager#locationAreas
		 * @type {PokemonLocationAreaManager}
		 * @readonly
		 */
		Object.defineProperty(this, "locationAreas", {value: new PokemonLocationAreaManager(client)});
		/**
		 * @name PokemonManager#shapes
		 * @type {PokemonShapeManager}
		 * @readonly
		 */
		Object.defineProperty(this, "shapes", {value: new PokemonShapeManager(client)});
		/**
		 * @name PokemonManager#species
		 * @type {PokemonSpeciesManager}
		 * @readonly
		 */
		Object.defineProperty(this, "species", {value: new PokemonSpeciesManager(client)});
		/**
		 * @name PokemonManager#stats
		 * @type {StatManager}
		 * @readonly
		 */
		Object.defineProperty(this, "stats", {value: new StatManager(client)});
		/**
		 * @name PokemonManager#types
		 * @type {TypeManager}
		 * @readonly
		 */
		Object.defineProperty(this, "types", {value: new TypeManager(client)});
	}
}

module.exports = PokemonManager;
