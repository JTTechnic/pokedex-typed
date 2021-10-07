"use strict";

/**
 * @typedef {Object} HTTPOptions
 * @property {number} [version=2] The API version to use
 * @property {string} [api="https://pokeapi.co/api"] Base API url
 */

/**
 * @typedef {Object} ClientOptions
 * @property {HTTPOptions} [http] HTTP Options
 */

class Options extends null {
	/**
	 * Default client options
	 * @returns {ClientOptions}
	 */
	static createDefault() {
		return {
			http: {
				version: 2,
				api: "https://pokeapi.co/api"
			}
		};
	}
}

module.exports = Options;
