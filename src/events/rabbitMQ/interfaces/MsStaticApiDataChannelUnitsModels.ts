export type MsStaticApiDataChannelUnitsModels =
  MsStaticApiDataChannelUnitsModel[];

export interface MsStaticApiDataChannelUnitsModel {
  fieldType: FieldType;
  values: Value[];
}

export enum FieldType {
  Area = 'area',
  Checklist = 'checklist',
  Compass = 'compass',
  Custom = 'custom',
  CustomSelect = 'customSelect',
  Date = 'date',
  Distance = 'distance',
  Electrical = 'electrical',
  Power = 'power',
  Pressure = 'pressure',
  Price = 'price',
  Rating = 'rating',
  Speed = 'speed',
  Temperature = 'temperature',
  Volume = 'volume',
  Weight = 'weight',
}

export interface Value {
  dataType?: DataType;
  /**
   * For use in translations etc.
   */
  key: string;
  label: string;
  measurementSystem: MeasurementSystem;
  value: string;
}

export enum DataType {
  Date = 'date',
  Number = 'number',
  String = 'string',
}

export enum MeasurementSystem {
  Imperial = 'imperial',
  Metric = 'metric',
  Na = 'na',
}
