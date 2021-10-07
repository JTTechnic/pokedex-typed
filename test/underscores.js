"use strict";

const {Util} = require("../src");

console.log(
	Util.convertUnderscores({
		key: "value",
		key_name: "value",
		array: [],
		objectArray: [
			{
				key: "value",
				key_name: "value"
			},
			{
				key: "value",
				key_name: "value"
			}
		],
		object: {
			key: "value",
			key_name: "value"
		}
	})
);
