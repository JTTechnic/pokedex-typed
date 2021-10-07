export interface APIResource {
	url: string;
}

export interface Description {
	description: string;
	language: NamedAPIResource;
}

export interface Effect {
	effect: string;
	language: NamedAPIResource;
}

export interface Encounter {
	minLevel: number;
	maxLevel: number;
	conditionValues: NamedAPIResource[];
	chance: number;
	method: NamedAPIResource;
}

export interface FlavorText {
	flavorText: string;
	language: NamedAPIResource;
	version: NamedAPIResource;
}

export interface GenerationGameIndex {
	gameIndex: number;
	generation: NamedAPIResource;
}

export interface MachineVersionDetail {
	machine: APIResource;
	versionGroup: NamedAPIResource;
}

export interface Name {
	name: string;
	language: NamedAPIResource;
}

export interface NamedAPIResource extends APIResource {
	name: string;
}

export interface VerboseEffect extends Effect {
	shortEffect: string;
}

export interface VersionEncounterDetail {
	version: NamedAPIResource;
	maxChance: number;
	encounterDetails: Encounter[];
}

export interface VersionGameIndex {
	gameIndex: number;
	version: NamedAPIResource;
}

export interface VersionGroupFlavorText {
	text: string;
	language: NamedAPIResource;
	versionGroup: NamedAPIResource;
}

export interface BerryFlavorMap {
	potency: number;
	flavor: NamedAPIResource;
}

export interface FlavorBerryMap {
	potency: number;
	berry: NamedAPIResource;
}

export interface ContestName extends Name {
	color: string;
}

export interface ChainLink {
	isBaby: boolean;
	species: NamedAPIResource;
	evolutionDetails: EvolutionDetail[];
	evolvesTo: ChainLink[];
}

export interface EvolutionDetail {
	item: NamedAPIResource;
	trigger: NamedAPIResource;
	gender: number;
	heldItem: NamedAPIResource;
	knownMove: NamedAPIResource;
	knownMoveType: NamedAPIResource;
	location: NamedAPIResource;
	minLevel: number;
	minHappiness: number;
	minBeauty: number;
	minAffection: number;
	needsOverworldRain: boolean;
	partySpecies: NamedAPIResource;
	partyType: NamedAPIResource;
	relativePhysicalStats: number;
	timeOfDay: string;
	tradeSpecies: NamedAPIResource;
	turnUpsideDown: boolean;
}

export interface PokemonEntry {
	entryNumber: number;
	pokemonSpecies: NamedAPIResource;
}

export interface ItemSprites {
	default: string;
}

export interface ItemHolderPokemon {
	pokemon: NamedAPIResource;
	versionDetails: ItemHolderPokemonVersionDetail[];
}

export interface ItemHolderPokemonVersionDetail {
	rarity: number;
	version: NamedAPIResource;
}

export interface EncounterMethodRate {
	encounterMethod: NamedAPIResource;
	versionDetails: EncounterVersionDetails[];
}

export interface EncounterVersionDetails {
	rate: number;
	version: NamedAPIResource;
}

export interface PokemonEncounter {
	pokemon: NamedAPIResource;
	versionDetails: VersionEncounterDetail[];
}

export interface PalParkEncounterSpecies {
	baseScore: number;
	rate: number;
	pokemonSpecies: NamedAPIResource;
}

export interface ContestComboSets {
	normal: ContestComboDetail;
	super: ContestComboDetail;
}

export interface ContestComboDetail {
	useBefore: NamedAPIResource[];
	useAfter: NamedAPIResource[];
}

export interface MoveFlavorText {
	flavorText: string;
	language: NamedAPIResource;
	versionGroup: NamedAPIResource;
}

export interface MoveMetaData {
	ailment: NamedAPIResource;
	category: NamedAPIResource;
	minHits: number;
	maxHits: number;
	minTurns: number;
	maxTurns: number;
	drain: number;
	healing: number;
	critRate: number;
	ailmentChance: number;
	flinchChance: number;
	statChance: number;
}

export interface MoveStatChange {
	change: number;
	stat: NamedAPIResource;
}

export interface PastMoveStatValues {
	accuracy: number;
	effectChance: number;
	power: number;
	pp: number;
	effectEntries: VerboseEffect[];
	type: NamedAPIResource;
	versionGroup: NamedAPIResource;
}

export interface AbilityEffectChange {
	effectEntries: Effect[];
	versionGroup: NamedAPIResource;
}

export interface AbilityFlavorText {
	flavorText: string;
	language: NamedAPIResource;
	versionGroup: NamedAPIResource;
}

export interface AbilityPokemon {
	isHidden: boolean;
	slot: number;
	pokemon: NamedAPIResource;
}

export interface PokemonSpeciesGender {
	rate: number;
	pokemonSpecies: NamedAPIResource;
}

export interface GrowthRateExperienceLevel {
	level: number;
	experience: number;
}

export interface NatureStatChange {
	maxChange: number;
	pokeathlonStat: NamedAPIResource;
}

export interface MoveBattleStylePreference {
	lowHpPreference: number;
	highHpPreference: number;
	moveBattleStyle: NamedAPIResource;
}

export interface NaturePokeathlonStatAffectSets {
	increase: NaturePokeathlonStatAffect;
	decrease: NaturePokeathlonStatAffect;
}

export interface NaturePokeathlonStatAffect {
	maxChange: number;
	nature: NamedAPIResource;
}

export interface PokemonAbility {
	isHidden: boolean;
	slot: number;
	ability: NamedAPIResource;
}

export interface PokemonType {
	slot: number;
	type: NamedAPIResource;
}

export interface PokemonHeldItem {
	item: NamedAPIResource;
	versionDetails: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
	version: NamedAPIResource;
	rarity: number;
}

export interface PokemonMove {
	move: NamedAPIResource;
	versionGroupDetails: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
	moveLearnMethod: NamedAPIResource;
	versionGroup: NamedAPIResource;
	levelLearnedAt: number;
}

export interface PokemonStat {
	stat: NamedAPIResource;
	effort: number;
	baseStat: number;
}

export interface PokemonSprites extends PokemonFormSprites {
	frontFemale: string;
	frontShinyFemale: string;
	backFemale: string;
	backShinyFemale: string;
}

export interface PokemonFormSprites {
	frontDefault: string;
	frontShiny: string;
	backDefault: string;
	backShiny: string;
}

export interface AwesomeName {
	awesomeName: string;
	language: NamedAPIResource;
}

export interface Genus {
	genus: string;
	language: NamedAPIResource;
}

export interface PokemonSpeciesDexEntry {
	entryNumber: number;
	pokedex: NamedAPIResource;
}

export interface PalParkEncounterArea {
	baseScore: number;
	rate: number;
	area: NamedAPIResource;
}

export interface PokemonSpeciesVariety {
	isDefault: boolean;
	pokemon: NamedAPIResource;
}

export interface MoveStatAffectSets {
	increase: MoveStatAffect[];
	decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
	change: number;
	move: NamedAPIResource;
}

export interface NatureStatAffectSets {
	increase: NamedAPIResource[];
	decrease: NamedAPIResource[];
}

export interface TypePokemon {
	slot: number;
	pokemon: NamedAPIResource;
}

export interface TypeRelations {
	noDamageTo: NamedAPIResource[];
	halfDamageTo: NamedAPIResource[];
	doubleDamageTo: NamedAPIResource[];
	noDamageFrom: NamedAPIResource[];
	halfDamageFrom: NamedAPIResource[];
	doubleDamageFrom: NamedAPIResource[];
}
