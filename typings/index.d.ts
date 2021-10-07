import Collection from "@discordjs/collection";
import {
	Berry,
	BerryFirmness,
	BerryFlavor,
	ContestEffect,
	ContestType,
	EncounterCondition,
	EncounterConditionValue,
	EncounterMethod,
	EvolutionChain,
	EvolutionTrigger,
	Generation,
	Item,
	ItemAttribute,
	ItemCategory,
	ItemFlingEffect,
	ItemPocket,
	Language,
	Machine,
	Pokedex,
	SuperContestEffect,
	Version,
	VersionGroup,
	Location,
	LocationArea,
	PalParkArea,
	Region,
	Move,
	MoveAilment,
	MoveBattleStyle,
	MoveCategory,
	MoveDamageClass,
	MoveLearnMethod,
	MoveTarget,
	Pokemon,
	Ability,
	Characteristic,
	EggGroup,
	Gender,
	GrowthRate,
	Nature,
	PokeathlonStat,
	PokemonColor,
	PokemonForm,
	PokemonHabitat,
	LocationAreaEncounter,
	PokemonShape,
	PokemonSpecies,
	Stat,
	Type
} from "./models";

interface HTTPOptions {
	version?: number;
	api?: string;
}

interface ClientOptions {
	http?: HTTPOptions;
}

declare class Client {
	public options: ClientOptions;
	public berries: BerryManager;
	public contests: {
		types: ContestTypeManager;
		effects: ContestEffectManager;
		superEffects: SuperContestEffectManager;
	};
	public encounters: {
		methods: EncounterMethodManager;
		conditions: EncounterConditionManager;
		conditionValues: EncounterConditionValueManager;
	};
	public evolution: {
		chains: EvolutionChainManager;
		triggers: EvolutionTriggerManager;
	};
	public games: {
		generations: GenerationManager;
		pokedexes: PokedexManager;
		versions: VersionManager;
		versionGroups: VersionGroupManager;
	};
	public items: ItemManager;
	public locations: LocationManager;
	public machines: MachineManager;
	public moves: MoveManager;
	public pokemon: PokemonManager;
	public languages: LanguageManager;
	public readonly apiRoute: string;
	public constructor(options?: ClientOptions);
}

declare class Options extends null {
	static createDefault(): ClientOptions;
}

declare class Util extends null {
	static convertUnderscores<O extends {[key: string]: any} = {[key: string]: any}>(object: O): O;
}

declare abstract class Manager<T = any> {
	public readonly client: Client;
	public readonly cache: Collection<string, T>;
	private readonly endpoint: string;
	public constructor(client: Client, endpoint: string);
}

declare abstract class BaseManager<T = any> extends Manager<T> {
	public fetch(route: string): Promise<T>;
}

declare abstract class ResourceManager<T = any> extends Manager<T> {
	public fetch(id: number, endpoint?: string): Promise<T>;
}

declare abstract class NamedResourceManager<T = any> extends Manager<T> {
	public fetch(idOrName: string | number, endpoint?: string): Promise<T>;
}

declare class LanguageManager extends NamedResourceManager<Language> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Language>;
}

declare class MachineManager extends ResourceManager<Machine> {
	public constructor(client: Client);
	public fetch(id: number): Promise<Machine>;
}

declare class BerryManager extends NamedResourceManager<Berry> {
	public readonly firmness: BerryFirmnessManager;
	public readonly flavor: BerryFlavorManager;
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Berry>;
}

declare class BerryFirmnessManager extends NamedResourceManager<BerryFirmness> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<BerryFirmness>;
}

declare class BerryFlavorManager extends NamedResourceManager<BerryFlavor> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<BerryFlavor>;
}

declare class ContestTypeManager extends NamedResourceManager<ContestType> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<ContestType>;
}

declare class ContestEffectManager extends ResourceManager<ContestEffect> {
	public constructor(client: Client);
	public fetch(id: number): Promise<ContestEffect>;
}

declare class SuperContestEffectManager extends ResourceManager<SuperContestEffect> {
	public constructor(client: Client);
	public fetch(id: number): Promise<SuperContestEffect>;
}

declare class EncounterMethodManager extends NamedResourceManager<EncounterMethod> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<EncounterMethod>;
}

declare class EncounterConditionManager extends NamedResourceManager<EncounterCondition> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<EncounterCondition>;
}

declare class EncounterConditionValueManager extends NamedResourceManager<EncounterConditionValue> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<EncounterConditionValue>;
}

declare class EvolutionChainManager extends ResourceManager<EvolutionChain> {
	public constructor(client: Client);
	public fetch(id: number): Promise<EvolutionChain>;
}

declare class EvolutionTriggerManager extends NamedResourceManager<EvolutionTrigger> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<EvolutionTrigger>;
}

declare class GenerationManager extends NamedResourceManager<Generation> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Generation>;
}

declare class PokedexManager extends NamedResourceManager<Pokedex> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Pokedex>;
}

declare class VersionManager extends NamedResourceManager<Version> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Version>;
}

declare class VersionGroupManager extends NamedResourceManager<VersionGroup> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<VersionGroup>;
}

declare class ItemManager extends NamedResourceManager<Item> {
	public readonly attributes: ItemAttributeManager;
	public readonly categories: ItemCategoryManager;
	public readonly flingEffects: ItemFlingEffectManager;
	public readonly pockets: ItemPocketManager;
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Item>;
}

declare class ItemAttributeManager extends NamedResourceManager<ItemAttribute> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<ItemAttribute>;
}

declare class ItemCategoryManager extends NamedResourceManager<ItemCategory> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<ItemCategory>;
}

declare class ItemFlingEffectManager extends NamedResourceManager<ItemFlingEffect> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<ItemFlingEffect>;
}

declare class ItemPocketManager extends NamedResourceManager<ItemPocket> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<ItemPocket>;
}

declare class LocationManager extends NamedResourceManager<Location> {
	public readonly areas: LocationAreaManager;
	public readonly palpark: PalParkAreaManager;
	public readonly regions: RegionManager;
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Location>;
}

declare class LocationAreaManager extends NamedResourceManager<LocationArea> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<LocationArea>;
}

declare class PalParkAreaManager extends NamedResourceManager<PalParkArea> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<PalParkArea>;
}

declare class RegionManager extends NamedResourceManager<Region> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Region>;
}

declare class MoveManager extends NamedResourceManager<Move> {
	public readonly ailments: MoveAilmentManager;
	public readonly battleStyles: MoveBattleStyleManager;
	public readonly categories: MoveCategoryManager;
	public readonly damageClasses: MoveDamageClassManager;
	public readonly learnMethods: MoveLearnMethodManager;
	public readonly targets: MoveTargetManager;
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Move>;
}

declare class MoveAilmentManager extends NamedResourceManager<MoveAilment> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<MoveAilment>;
}

declare class MoveBattleStyleManager extends NamedResourceManager<MoveBattleStyle> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<MoveBattleStyle>;
}

declare class MoveCategoryManager extends NamedResourceManager<MoveCategory> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<MoveCategory>;
}

declare class MoveDamageClassManager extends NamedResourceManager<MoveDamageClass> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<MoveDamageClass>;
}

declare class MoveLearnMethodManager extends NamedResourceManager<MoveLearnMethod> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<MoveLearnMethod>;
}

declare class MoveTargetManager extends NamedResourceManager<MoveTarget> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<MoveTarget>;
}

declare class PokemonManager extends NamedResourceManager<Pokemon> {
	public readonly abilities: AbilityManager;
	public readonly characteristics: CharacteristicManager;
	public readonly eggGroups: EggGroupManager;
	public readonly genders: GenderManager;
	public readonly growthRates: GrowthRateManager;
	public readonly natures: NatureManager;
	public readonly pokeathlonStats: PokeathlonStatManager;
	public readonly colors: PokemonColorManager;
	public readonly forms: PokemonFormManager;
	public readonly habitats: PokemonHabitatManager;
	public readonly locationAreas: PokemonLocationAreaManager;
	public readonly shapes: PokemonShapeManager;
	public readonly species: PokemonSpeciesManager;
	public readonly stats: StatManager;
	public readonly types: TypeManager;
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Pokemon>;
}

declare class AbilityManager extends NamedResourceManager<Ability> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Ability>;
}

declare class CharacteristicManager extends ResourceManager<Characteristic> {
	public constructor(client: Client);
	public fetch(id: number): Promise<Characteristic>;
}

declare class EggGroupManager extends NamedResourceManager<EggGroup> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<EggGroup>;
}

declare class GenderManager extends NamedResourceManager<Gender> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Gender>;
}

declare class GrowthRateManager extends NamedResourceManager<GrowthRate> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<GrowthRate>;
}

declare class NatureManager extends NamedResourceManager<Nature> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Nature>;
}

declare class PokeathlonStatManager extends NamedResourceManager<PokeathlonStat> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<PokeathlonStat>;
}

declare class PokemonColorManager extends NamedResourceManager<PokemonColor> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<PokemonColor>;
}

declare class PokemonFormManager extends NamedResourceManager<PokemonForm> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<PokemonForm>;
}

declare class PokemonHabitatManager extends NamedResourceManager<PokemonHabitat> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<PokemonHabitat>;
}

declare class PokemonLocationAreaManager extends NamedResourceManager<LocationAreaEncounter> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<LocationAreaEncounter>;
}

declare class PokemonShapeManager extends NamedResourceManager<PokemonShape> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<PokemonShape>;
}

declare class PokemonSpeciesManager extends NamedResourceManager<PokemonSpecies> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<PokemonSpecies>;
}

declare class StatManager extends NamedResourceManager<Stat> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Stat>;
}

declare class TypeManager extends NamedResourceManager<Type> {
	public constructor(client: Client);
	public fetch(idOrName: string | number): Promise<Type>;
}

export {
	HTTPOptions,
	ClientOptions,
	Client,
	Options,
	Util,
	BaseManager,
	ResourceManager,
	NamedResourceManager,
	LanguageManager,
	MachineManager,
	BerryManager,
	BerryFirmnessManager,
	BerryFlavorManager,
	ContestTypeManager,
	ContestEffectManager,
	SuperContestEffectManager,
	EncounterMethodManager,
	EncounterConditionManager,
	EncounterConditionValueManager,
	EvolutionChainManager,
	EvolutionTriggerManager,
	GenerationManager,
	PokedexManager,
	VersionManager,
	VersionGroupManager,
	ItemManager,
	ItemAttributeManager,
	ItemCategoryManager,
	ItemFlingEffectManager,
	ItemPocketManager,
	LocationManager,
	LocationAreaManager,
	PalParkAreaManager,
	RegionManager,
	MoveManager,
	MoveAilmentManager,
	MoveBattleStyleManager,
	MoveCategoryManager,
	MoveDamageClassManager,
	MoveLearnMethodManager,
	MoveTargetManager,
	PokemonManager,
	AbilityManager,
	CharacteristicManager,
	EggGroupManager,
	GenderManager,
	GrowthRateManager,
	NatureManager,
	PokeathlonStatManager,
	PokemonColorManager,
	PokemonFormManager,
	PokemonHabitatManager,
	PokemonLocationAreaManager,
	PokemonShapeManager,
	PokemonSpeciesManager,
	StatManager,
	TypeManager
};
