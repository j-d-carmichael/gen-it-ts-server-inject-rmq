export interface MsContentCheckImageRekognitionLabels {
  /**
   * Labels considered soft enough to automatically allow through
   */
  allowedSoftLabels?: AllowedSoftLabels;
  /**
   * All labels as described at
   * https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html
   */
  labels?: Labels;
}

/**
 * Labels considered soft enough to automatically allow through
 */
export enum AllowedSoftLabels {
  AlcoholicBeverages = 'Alcoholic Beverages',
  BarechestedMale = 'Barechested Male',
  Drinking = 'Drinking',
  FemaleSwimwearOrUnderwear = 'Female Swimwear Or Underwear',
  Gambling = 'Gambling',
  MaleSwimwearOrUnderwear = 'Male Swimwear Or Underwear',
  MiddleFinger = 'Middle Finger',
  PartialNudity = 'Partial Nudity',
  RevealingClothes = 'Revealing Clothes',
  SexualSituations = 'Sexual Situations',
  Smoking = 'Smoking',
  TobaccoProducts = 'Tobacco Products',
  Weapons = 'Weapons',
}

/**
 * All labels as described at
 * https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html
 */
export enum Labels {
  AdultToys = 'Adult Toys',
  AirCrash = 'Air Crash',
  AlcoholicBeverages = 'Alcoholic Beverages',
  BarechestedMale = 'Barechested Male',
  Corpses = 'Corpses',
  Drinking = 'Drinking',
  DrugParaphernalia = 'Drug Paraphernalia',
  DrugProducts = 'Drug Products',
  DrugUse = 'Drug Use',
  EmaciatedBodies = 'Emaciated Bodies',
  ExplosionsAndBlasts = 'Explosions And Blasts',
  Extremist = 'Extremist',
  FemaleSwimwearOrUnderwear = 'Female Swimwear Or Underwear',
  Gambling = 'Gambling',
  GraphicFemaleNudity = 'Graphic Female Nudity',
  GraphicMaleNudity = 'Graphic Male Nudity',
  GraphicViolenceOrGore = 'Graphic Violence Or Gore',
  Hanging = 'Hanging',
  IllustratedExplicitNudity = 'Illustrated Explicit Nudity',
  MaleSwimwearOrUnderwear = 'Male Swimwear Or Underwear',
  MiddleFinger = 'Middle Finger',
  NaziParty = 'Nazi Party',
  Nudity = 'Nudity',
  PartialNudity = 'Partial Nudity',
  PhysicalViolence = 'Physical Violence',
  Pills = 'Pills',
  RevealingClothes = 'Revealing Clothes',
  SelfInjury = 'Self Injury',
  SexualActivity = 'Sexual Activity',
  SexualSituations = 'Sexual Situations',
  Smoking = 'Smoking',
  TobaccoProducts = 'Tobacco Products',
  WeaponViolence = 'Weapon Violence',
  Weapons = 'Weapons',
  WhiteSupremacy = 'White Supremacy',
}
