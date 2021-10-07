"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.evolution.chains.fetch(1));
	console.log(await client.evolution.triggers.fetch("level-up"));
})();
