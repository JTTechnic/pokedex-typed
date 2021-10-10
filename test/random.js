"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.pokemon.fetchRandom());
})();
