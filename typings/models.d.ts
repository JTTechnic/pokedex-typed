import {
	NamedAPIResource,
	BerryFlavorMap,
	Name,
	FlavorBerryMap,
	ContestName,
	Effect,
	FlavorText,
	ChainLink,
	Description,
	PokemonEntry,
	VerboseEffect,
	VersionGroupFlavorText,
	GenerationGameIndex,
	APIResource,
	MachineVersionDetail,
	ItemSprites,
	ItemHolderPokemon,
	EncounterMethodRate,
	PokemonEncounter,
	PalParkEncounterSpecies,
	ContestComboSets,
	MoveFlavorText,
	MoveMetaData,
	PastMoveStatValues,
	MoveStatChange,
	AbilityEffectChange,
	AbilityFlavorText,
	AbilityPokemon,
	PokemonSpeciesGender,
	GrowthRateExperienceLevel,
	NatureStatChange,
	MoveBattleStylePreference,
	NaturePokeathlonStatAffectSets,
	VersionGameIndex,
	PokemonAbility,
	PokemonHeldItem,
	PokemonMove,
	PokemonSprites,
	PokemonStat,
	PokemonType,
	VersionEncounterDetail,
	PokemonFormSprites,
	AwesomeName,
	PokemonSpeciesDexEntry,
	PalParkEncounterArea,
	Genus,
	PokemonSpeciesVariety,
	MoveStatAffectSets,
	NatureStatAffectSets,
	TypeRelations,
	TypePokemon
} from "./api";

export class Berry {
	public id: number;
	public name: string;
	public growthTime: number;
	public maxHarvest: number;
	public naturalGiftPower: number;
	public size: number;
	public smoothness: number;
	public soilDryness: number;
	public firmness: NamedAPIResource;
	public flavors: BerryFlavorMap[];
	public item: NamedAPIResource;
	public naturalGiftType: NamedAPIResource;
	public constructor(data: any);
}

export class BerryFirmness {
	public id: number;
	public name: string;
	public berries: NamedAPIResource[];
	public names: Name[];
	public constructor(data: any);
}

export class BerryFlavor {
	public id: number;
	public name: string;
	public berries: FlavorBerryMap[];
	public contestType: NamedAPIResource;
	public names: Name[];
	public constructor(data: any);
}

export class ContestType {
	public id: number;
	public name: string;
	public berryFlavor: NamedAPIResource;
	public names: ContestName[];
	public constructor(data: any);
}

export class ContestEffect {
	public id: number;
	public appeal: number;
	public jam: number;
	public effectEntries: Effect[];
	public flavorTextEntries: FlavorText[];
	public constructor(data: any);
}

export class SuperContestEffect {
	public id: number;
	public appeal: number;
	public flavorTextEntries: FlavorText[];
	public moves: NamedAPIResource[];
	public constructor(data: any);
}

export class EncounterMethod {
	public id: number;
	public name: string;
	public order: number;
	public names: Name[];
	public constructor(data: any);
}

export class EncounterCondition {
	public id: number;
	public name: string;
	public names: Name[];
	public values: NamedAPIResource[];
	public constructor(data: any);
}

export class EncounterConditionValue {
	public id: number;
	public name: string;
	public condition: NamedAPIResource;
	public names: Name[];
	public constructor(data: any);
}

export class EvolutionChain {
	public id: number;
	public babyTriggerItem: NamedAPIResource;
	public chain: ChainLink;
	public constructor(data: any);
}

export class EvolutionTrigger {
	public id: number;
	public name: string;
	public names: Name[];
	public pokemonSpecies: NamedAPIResource[];
	public constructor(data: any);
}

export class Generation {
	public id: number;
	public name: string;
	public abilities: NamedAPIResource[];
	public names: Name[];
	public mainRegion: NamedAPIResource;
	public moves: NamedAPIResource[];
	public pokemonSpecies: NamedAPIResource[];
	public types: NamedAPIResource[];
	public versionGroups: NamedAPIResource[];
	public constructor(data: any);
}

export class Pokedex {
	public id: number;
	public name: string;
	public isMainSeries: boolean;
	public descriptions: Description[];
	public names: Name[];
	public pokemonEntries: PokemonEntry[];
	public region: NamedAPIResource;
	public versionGroups: NamedAPIResource[];
	public constructor(data: any);
}

export class Version {
	public id: number;
	public name: string;
	public names: Name[];
	public versionGroup: NamedAPIResource;
	public constructor(data: any);
}

export class VersionGroup {
	public id: number;
	public name: string;
	public order: number;
	public generation: NamedAPIResource;
	public moveLearnMethods: NamedAPIResource[];
	public pokedexes: NamedAPIResource[];
	public regions: NamedAPIResource[];
	public versions: NamedAPIResource[];
	public constructor(data: any);
}

export class Item {
	public id: number;
	public name: string;
	public cost: number;
	public flingPower: number;
	public flingEffect: NamedAPIResource;
	public attributes: NamedAPIResource[];
	public category: NamedAPIResource;
	public effectEntries: VerboseEffect[];
	public flavorTextEntries: VersionGroupFlavorText[];
	public gameIndices: GenerationGameIndex[];
	public names: Name[];
	public sprites: ItemSprites;
	public heldByPokemon: ItemHolderPokemon[];
	public babyTriggerFor: APIResource;
	public machines: MachineVersionDetail[];
	public constructor(data: any);
}

export class ItemAttribute {
	public id: number;
	public name: string;
	public items: NamedAPIResource[];
	public names: Name[];
	public descriptions: Description[];
	public constructor(data: any);
}

export class ItemCategory {
	public id: number;
	public name: string;
	public items: NamedAPIResource[];
	public names: Name[];
	public pocket: NamedAPIResource;
	public constructor(data: any);
}

export class ItemFlingEffect {
	public id: number;
	public name: string;
	public effectEntries: Effect[];
	public items: NamedAPIResource[];
	public constructor(data: any);
}

export class ItemPocket {
	public id: number;
	public name: string;
	public categories: NamedAPIResource[];
	public names: Name[];
	public constructor(data: any);
}

export class Location {
	public id: number;
	public name: string;
	public region: NamedAPIResource;
	public names: Name[];
	public gameIndices: GenerationGameIndex[];
	public areas: NamedAPIResource[];
	public constructor(data: any);
}

export class LocationArea {
	public id: number;
	public name: string;
	public gameIndex: number;
	public encounterMethodRates: EncounterMethodRate[];
	public location: NamedAPIResource;
	public names: Name[];
	public pokemonEncounters: PokemonEncounter[];
	public constructor(data: any);
}

export class PalParkArea {
	public id: number;
	public name: string;
	public names: Name[];
	public pokemonEncounters: PalParkEncounterSpecies[];
	public constructor(data: any);
}

export class Region {
	public id: number;
	public locations: NamedAPIResource[];
	public name: string;
	public names: Name[];
	public mainGeneration: NamedAPIResource;
	public pokedexes: NamedAPIResource[];
	public versionGroups: NamedAPIResource[];
	public constructor(data: any);
}

export class Machine {
	public id: number;
	public item: NamedAPIResource;
	public move: NamedAPIResource;
	public versionGroup: NamedAPIResource;
	public constructor(data: any);
}

export class Move {
	public id: number;
	public name: string;
	public accuracy: number;
	public effectChance: number;
	public pp: number;
	public priority: number;
	public power: number;
	public contestCombos: ContestComboSets;
	public contestType: NamedAPIResource;
	public contestEffect: APIResource;
	public damageClass: NamedAPIResource;
	public effectEntries: VerboseEffect[];
	public effectChanges: AbilityEffectChange[];
	public flavorTextEntries: MoveFlavorText[];
	public generation: NamedAPIResource;
	public machines: MachineVersionDetail[];
	public meta: MoveMetaData;
	public names: Name[];
	public pastValues: PastMoveStatValues[];
	public statChanges: MoveStatChange[];
	public superContestEffect: APIResource;
	public target: NamedAPIResource;
	public type: NamedAPIResource;
	public constructor(data: any);
}

export class MoveAilment {
	public id: number;
	public name: string;
	public moves: NamedAPIResource[];
	public names: Name[];
	public constructor(data: any);
}

export class MoveBattleStyle {
	public id: number;
	public name: string;
	public names: Name[];
	public constructor(data: any);
}

export class MoveCategory {
	public id: number;
	public name: string;
	public moves: NamedAPIResource[];
	public descriptions: Description[];
	public constructor(data: any);
}

export class MoveDamageClass {
	public id: number;
	public name: string;
	public descriptions: Description[];
	public moves: NamedAPIResource[];
	public names: Name[];
	public constructor(data: any);
}

export class MoveLearnMethod {
	public id: number;
	public name: string;
	public descriptions: Description[];
	public names: Name[];
	public versionGroups: NamedAPIResource[];
	public constructor(data: any);
}

export class MoveTarget {
	public id: number;
	public name: string;
	public descriptions: Description[];
	public moves: NamedAPIResource[];
	public names: Name[];
	public constructor(data: any);
}

export class Ability {
	public id: number;
	public name: string;
	public isMainSeries: boolean;
	public generation: NamedAPIResource;
	public names: Name[];
	public effectEntries: VerboseEffect[];
	public effectChanges: AbilityEffectChange[];
	public flavorTextEntries: AbilityFlavorText[];
	public pokemon: AbilityPokemon[];
	public constructor(data: any);
}

export class Characteristic {
	public id: number;
	public geneModulo: number;
	public possibleValues: number[];
	public constructor(data: any);
}

export class EggGroup {
	public id: number;
	public name: string;
	public names: Name[];
	public pokemonSpecies: NamedAPIResource[];
	public constructor(data: any);
}

export class Gender {
	public id: number;
	public name: string;
	public pokemonSpeciesDetails: PokemonSpeciesGender[];
	public requiredForEvolution: NamedAPIResource[];
	public constructor(data: any);
}

export class GrowthRate {
	public id: number;
	public name: string;
	public formula: string;
	public descriptions: Description[];
	public levels: GrowthRateExperienceLevel[];
	public pokemonSpecies: NamedAPIResource[];
	public constructor(data: any);
}

export class Nature {
	public id: number;
	public name: string;
	public decreasedStat: NamedAPIResource;
	public increasedStat: NamedAPIResource;
	public hatesFlavor: NamedAPIResource;
	public likesFlavor: NamedAPIResource;
	public pokeathlonStatChanges: NatureStatChange[];
	public moveBattleStylePreferences: MoveBattleStylePreference[];
	public names: Name[];
	public constructor(data: any);
}

export class PokeathlonStat {
	public id: number;
	public name: string;
	public names: Name[];
	public affectingNatures: NaturePokeathlonStatAffectSets;
	public constructor(data: any);
}

export class Pokemon {
	public id: number;
	public name: string;
	public baseExperience: number;
	public height: number;
	public isDefault: boolean;
	public order: number;
	public weight: number;
	public abilities: PokemonAbility[];
	public forms: NamedAPIResource[];
	public gameIndices: VersionGameIndex[];
	public heldItems: PokemonHeldItem[];
	public locationAreaEncounters: string;
	public moves: PokemonMove[];
	public sprites: PokemonSprites;
	public species: NamedAPIResource;
	public stats: PokemonStat[];
	public types: PokemonType[];
	public constructor(data: any);
}

export class LocationAreaEncounter {
	public locationArea: NamedAPIResource;
	public versionDetails: VersionEncounterDetail[];
	public constructor(data: any);
}

export class PokemonColor {
	public id: number;
	public name: string;
	public names: Name[];
	public pokemonSpecies: NamedAPIResource[];
	public constructor(data: any);
}

export class PokemonForm {
	public id: number;
	public name: string;
	public order: number;
	public formOrder: number;
	public isDefault: boolean;
	public isBattleOnly: boolean;
	public isMega: boolean;
	public formName: string;
	public pokemon: NamedAPIResource;
	public sprites: PokemonFormSprites;
	public versionGroup: NamedAPIResource;
	public names: Name[];
	public formNames: Name[];
	public constructor(data: any);
}

export class PokemonHabitat {
	public id: number;
	public name: string;
	public names: Name[];
	public pokemonSpecies: NamedAPIResource[];
	public constructor(data: any);
}

export class PokemonShape {
	public id: number;
	public name: string;
	public awesomeNmaes: AwesomeName[];
	public names: Name[];
	public pokemonSpecies: NamedAPIResource[];
	public constructor(data: any);
}

export class PokemonSpecies {
	public id: number;
	public name: string;
	public order: number;
	public genderRate: number;
	public captureRate: number;
	public baseHappiness: number;
	public isBaby: boolean;
	public isLegendary: boolean;
	public isMythical: boolean;
	public hatchCounter: number;
	public hasGenderDifferences: boolean;
	public formsSwitchable: boolean;
	public growthRate: NamedAPIResource;
	public pokedexNumbers: PokemonSpeciesDexEntry[];
	public eggGroups: NamedAPIResource[];
	public color: NamedAPIResource;
	public shape: NamedAPIResource;
	public evolvesFromSpecies: NamedAPIResource;
	public evolutionChain: APIResource;
	public habitat: NamedAPIResource;
	public generation: NamedAPIResource;
	public names: Name[];
	public palParkEncounters: PalParkEncounterArea[];
	public flavorTextEntries: FlavorText[];
	public formDescriptions: Description[];
	public genera: Genus[];
	public varieties: PokemonSpeciesVariety[];
	public constructor(data: any);
}

export class Stat {
	public id: number;
	public name: string;
	public gameIndex: number;
	public isBattleOnly: boolean;
	public affectingMoves: MoveStatAffectSets;
	public affectingNatures: NatureStatAffectSets;
	public characteristics: APIResource[];
	public moveDamageClass: NamedAPIResource;
	public names: Name[];
	public constructor(data: any);
}

export class Type {
	public id: number;
	public name: string;
	public damageRelations: TypeRelations;
	public gameIndices: GenerationGameIndex[];
	public generation: NamedAPIResource;
	public moveDamageClass: NamedAPIResource;
	public names: Name[];
	public pokemon: TypePokemon[];
	public moves: NamedAPIResource[];
	public constructor(data: any);
}

export class Language {
	public id: number;
	public name: string;
	public official: boolean;
	public iso639: string;
	public iso3166: string;
	public names: Name[];
	public constructor(data: any);
}
