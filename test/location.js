"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.locations.fetch("canalave-city"));
	console.log(await client.locations.areas.fetch("canalave-city-area"));
	console.log(await client.locations.palpark.fetch("forest"));
	console.log(await client.locations.regions.fetch("kanto"));
})();
