"use strict";

const {Client} = require("../src");

const client = new Client();
(async () => {
	console.log(await client.pokemon.fetch("butterfree"));
	console.log(await client.pokemon.abilities.fetch("stench"));
	console.log(await client.pokemon.characteristics.fetch(1));
	console.log(await client.pokemon.eggGroups.fetch("monster"));
	console.log(await client.pokemon.genders.fetch("female"));
	console.log(await client.pokemon.growthRates.fetch("slow"));
	console.log(await client.pokemon.natures.fetch("bold"));
	console.log(await client.pokemon.pokeathlonStats.fetch("speed"));
	console.log(await client.pokemon.locationAreas.fetch("butterfree"));
	console.log(await client.pokemon.colors.fetch("black"));
	console.log(await client.pokemon.forms.fetch("wormadam-plant"));
	console.log(await client.pokemon.habitats.fetch("cave"));
	console.log(await client.pokemon.shapes.fetch("ball"));
	console.log(await client.pokemon.species.fetch("wormadam"));
	console.log(await client.pokemon.stats.fetch("attack"));
	console.log(await client.pokemon.types.fetch("ground"));
})();
