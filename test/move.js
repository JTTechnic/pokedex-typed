"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.moves.fetch("pound"));
	console.log(await client.moves.ailments.fetch("paralysis"));
	console.log(await client.moves.battleStyles.fetch("attack"));
	console.log(await client.moves.categories.fetch("ailment"));
	console.log(await client.moves.damageClasses.fetch("status"));
	console.log(await client.moves.learnMethods.fetch("level-up"));
	console.log(await client.moves.targets.fetch("specific-move"));
})();
