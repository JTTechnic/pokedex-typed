"use strict";

const Options = require("./Options");
const LanguageManager = require("./managers/LanguageManager");
const MachineManager = require("./managers/MachineManager");
const BerryManager = require("./managers/berries/BerryManager");
const ContestEffectManager = require("./managers/contests/ContestEffectManager");
const ContestTypeManager = require("./managers/contests/ContestTypeManager");
const SuperContestEffectManager = require("./managers/contests/SuperContestEffectManager");
const EncounterConditionManager = require("./managers/encounters/EncounterConditionManager");
const EncounterConditionValueManager = require("./managers/encounters/EncounterConditionValueManager");
const EncounterMethodManager = require("./managers/encounters/EncounterMethodManager");
const EvolutionChainManager = require("./managers/evolution/EvolutionChainManager");
const EvolutionTriggerManager = require("./managers/evolution/EvolutionTriggerManager");
const GenerationManager = require("./managers/games/GenerationManager");
const PokedexManager = require("./managers/games/PokedexManager");
const VersionGroupManager = require("./managers/games/VersionGroupManager");
const VersionManager = require("./managers/games/VersionManager");
const ItemManager = require("./managers/items/ItemManager");
const LocationManager = require("./managers/locations/LocationManager");
const MoveManager = require("./managers/moves/MoveManager");
const PokemonManager = require("./managers/pokemon/PokemonManager");

class Client {
	/**
	 * @param {ClientOptions} options - The options of the client
	 */
	constructor(options) {
		this.options = Object.assign(Options.createDefault(), options);
		/**
		 * @type {BerryManager}
		 */
		this.berries = new BerryManager(this);
		/**
		 * @type {{
		 * 	types: ContestTypeManager;
		 * 	effects: ContestEffectManager;
		 * 	superEffects: SuperContestEffectManager;
		 * }}
		 */
		this.contests = {
			types: new ContestTypeManager(this),
			effects: new ContestEffectManager(this),
			superEffects: new SuperContestEffectManager(this)
		};
		/**
		 * @type {{
		 * 	methods: EncounterMethodManager;
		 * 	conditions: EncounterConditionManager;
		 * 	conditionValues: EncounterConditionValueManager;
		 * }}
		 */
		this.encounters = {
			methods: new EncounterMethodManager(this),
			conditions: new EncounterConditionManager(this),
			conditionValues: new EncounterConditionValueManager(this)
		};
		/**
		 * @type {{
		 * 	chains: EvolutionChainManager;
		 * 	triggers: EvolutionTriggerManager;
		 * }}
		 */
		this.evolution = {
			chains: new EvolutionChainManager(this),
			triggers: new EvolutionTriggerManager(this)
		};
		/**
		 * @type {{
		 * 	generations: GenerationManager;
		 * 	pokedexes: PokedexManager;
		 * 	version: VersionManager;
		 * 	versionGroups: VersionGroupManager;
		 * }}
		 */
		this.games = {
			generations: new GenerationManager(this),
			pokedexes: new PokedexManager(this),
			versions: new VersionManager(this),
			versionGroups: new VersionGroupManager(this)
		};
		/**
		 * @type {ItemManager}
		 */
		this.items = new ItemManager(this);
		/**
		 * @type {LocationManager}
		 */
		this.locations = new LocationManager(this);
		/**
		 * @type {MachineManager}
		 */
		this.machines = new MachineManager(this);
		/**
		 * @type {MoveManager}
		 */
		this.moves = new MoveManager(this);
		/**
		 * @type {PokemonManager}
		 */
		this.pokemon = new PokemonManager(this);
		/**
		 * @type {LanguageManager}
		 */
		this.languages = new LanguageManager(this);
	}

	get apiRoute() {
		const {http} = this.options;
		return `${http.api}/v${http.version}`;
	}
}

module.exports = Client;
