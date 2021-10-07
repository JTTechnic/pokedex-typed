"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.machines.fetch(1));
})();
