"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	// eslint-disable-next-line semi-spacing
	for (let i = 0; i < 2; i++) {
		console.time("fetch");
		// eslint-disable-next-line no-await-in-loop
		console.log(await client.pokemon.fetchAll(1));
		console.timeEnd("fetch");
	}
})();
