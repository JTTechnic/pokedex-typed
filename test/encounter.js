"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.encounters.methods.fetch("walk"));
	console.log(await client.encounters.conditions.fetch("swarm"));
	console.log(await client.encounters.conditionValues.fetch("swarm-yes"));
})();
