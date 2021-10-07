"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.berries.fetch("cheri"));
	console.log(await client.berries.firmness.fetch("soft"));
	console.log(await client.berries.flavor.fetch("spicy"));
})();
