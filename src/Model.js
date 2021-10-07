"use strict";

const Util = require("./Util");

module.exports = class Model {
	constructor(data) {
		data = Util.convertUnderscores(data);
		for (const key in data) this[key] = data[key];
	}
};
