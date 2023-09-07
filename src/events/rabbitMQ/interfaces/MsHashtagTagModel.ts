export interface MsHashtagTagModel {
  _id: string;
  createdAt: Date;
  source: Source;
  tag: string;
  updatedAt: Date;
  useCount: number;
}

export enum Source {
  Item = 'item',
}
