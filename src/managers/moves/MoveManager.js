"use strict";

const MoveAilmentManager = require("./MoveAilmentManager");
const MoveBattleStyleManager = require("./MoveBattleStyleManager");
const MoveCategoryManager = require("./MoveCategoryManager");
const MoveDamageClassManager = require("./MoveDamageClassManager");
const MoveLearnMethodManager = require("./MoveLearnMethodManager");
const MoveTargetManager = require("./MoveTargetManager");
const NamedResourceManager = require("../NamedResourceManager");

class MoveManager extends NamedResourceManager {
	constructor(client) {
		super(client, "move");

		/**
		 * @name MoveManager#ailments
		 * @type {MoveAilmentManager}
		 * @readonly
		 */
		Object.defineProperty(this, "ailments", {value: new MoveAilmentManager(client)});
		/**
		 * @name MoveManager#battleStyles
		 * @type {MoveBattleStyleManager}
		 * @readonly
		 */
		Object.defineProperty(this, "battleStyles", {value: new MoveBattleStyleManager(client)});
		/**
		 * @name MoveManager#categories
		 * @type {MoveCategoryManager}
		 * @readonly
		 */
		Object.defineProperty(this, "categories", {value: new MoveCategoryManager(client)});
		/**
		 * @name MoveManager#damageClasses
		 * @type {MoveDamageClassManager}
		 * @readonly
		 */
		Object.defineProperty(this, "damageClasses", {value: new MoveDamageClassManager(client)});
		/**
		 * @name MoveManager#learnMethods
		 * @type {MoveLearnMethodManager}
		 * @readonly
		 */
		Object.defineProperty(this, "learnMethods", {value: new MoveLearnMethodManager(client)});
		/**
		 * @name MoveManager#targets
		 * @type {MoveTargetManager}
		 * @readonly
		 */
		Object.defineProperty(this, "targets", {value: new MoveTargetManager(client)});
	}
}

module.exports = MoveManager;
