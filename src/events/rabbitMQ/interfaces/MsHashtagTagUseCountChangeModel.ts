export interface MsHashtagTagUseCountChangeModel {
  source: Source;
  tag: string;
}

export enum Source {
  Item = 'item',
}
