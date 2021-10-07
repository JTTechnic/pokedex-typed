"use strict";

module.exports = class Util extends null {
	static convertUnderscores(object) {
		const newObject = {};
		for (const key in object) {
			let value = object[key];
			if (Array.isArray(value)) {
				for (const index in value) value[index] = this.convertUnderscores(value[index]);
			} else if (typeof value === "object") {
				value = this.convertUnderscores(value);
			}
			if (!key.includes("_")) {
				newObject[key] = value;
				continue;
			}
			const splitKey = key.split("_");
			newObject[
				splitKey
					// eslint-disable-next-line no-shadow
					.map((key, index) => {
						if (index === 0) return key;
						return `${key[0].toUpperCase()}${key.substring(1)}`;
					})
					.join("")
			] = value;
		}
		return newObject;
	}
};
