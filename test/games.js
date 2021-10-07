"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.games.generations.fetch("generation-i"));
	console.log(await client.games.pokedexes.fetch("kanto"));
	console.log(await client.games.versions.fetch("red"));
	console.log(await client.games.versionGroups.fetch("red-blue"));
})();
