"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.berries.fetchAmount());
	console.log(await client.games.generations.fetchAmount());
	console.log(await client.machines.fetchAmount());
})();
