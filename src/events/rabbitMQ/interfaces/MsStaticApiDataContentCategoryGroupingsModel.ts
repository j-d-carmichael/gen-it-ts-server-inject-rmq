export interface MsStaticApiDataContentCategoryGroupingsModel {
  groupings: Grouping[];
}

export interface Grouping {
  /**
   * Note - these enums as typed are used as both the keys for the content category groupings
   * file and carried through to  the front end and are used in translation files. A change
   * here needs to be carried through.
   */
  groupName: GroupName;
  labels: Label[];
}

/**
 * Note - these enums as typed are used as both the keys for the content category groupings
 * file and carried through to  the front end and are used in translation files. A change
 * here needs to be carried through.
 */
export enum GroupName {
  Appliances = 'appliances',
  Art = 'art',
  Baby = 'baby',
  Books = 'books',
  Camera = 'camera',
  Christmas = 'christmas',
  Cleaning = 'cleaning',
  ClothingAndAccessories = 'clothingAndAccessories',
  Computer = 'computer',
  DiyAndTools = 'diyAndTools',
  Electronics = 'electronics',
  FoodAndDrink = 'foodAndDrink',
  Gaming = 'gaming',
  HealthAndPersonalCare = 'healthAndPersonalCare',
  Hobbies = 'hobbies',
  HouseAndFurniture = 'houseAndFurniture',
  Jewelry = 'jewelry',
  Kitchen = 'kitchen',
  Lighting = 'lighting',
  Luggage = 'luggage',
  Music = 'music',
  Nature = 'nature',
  OfficeAndStationary = 'officeAndStationary',
  PerfumeAndCosmetic = 'perfumeAndCosmetic',
  Pet = 'pet',
  PlantsAndGardening = 'plantsAndGardening',
  PropertyAndRealEstate = 'propertyAndRealEstate',
  ScienceAndTechnology = 'scienceAndTechnology',
  SportsAndOutdoors = 'sportsAndOutdoors',
  Toys = 'toys',
  TravelAndLeisure = 'travelAndLeisure',
  Uncategorised = '__uncategorised__',
  Vehicles = 'vehicles',
  Wedding = 'wedding',
}

export interface Label {
  name: string;
  type: Type;
}

export enum Type {
  Label = 'label',
  Logo = 'logo',
}
