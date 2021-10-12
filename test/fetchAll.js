"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.berries.fetchAll(1));
	console.log(await client.games.generations.fetchAll(1));
	console.log(await client.machines.fetchAll(1));
})();
