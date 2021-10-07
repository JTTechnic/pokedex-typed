"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.contests.types.fetch("cool"));
	console.log(await client.contests.effects.fetch(1));
	console.log(await client.contests.superEffects.fetch(1));
})();
