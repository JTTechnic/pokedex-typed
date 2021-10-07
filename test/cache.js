"use strict";

const {Client} = require("../src");

const client = new Client();
// eslint-disable-next-line semi-spacing
for (let i = 0; i < 20; i++) {
	console.time("fetch");
	client.berries.fetch("cheri");
	console.timeEnd("fetch");
}
