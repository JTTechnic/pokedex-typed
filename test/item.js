"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.items.fetch("master-ball"));
	console.log(await client.items.attributes.fetch("countable"));
	console.log(await client.items.categories.fetch("stat-boosts"));
	console.log(await client.items.flingEffects.fetch("badly-poison"));
	console.log(await client.items.pockets.fetch("misc"));
})();
