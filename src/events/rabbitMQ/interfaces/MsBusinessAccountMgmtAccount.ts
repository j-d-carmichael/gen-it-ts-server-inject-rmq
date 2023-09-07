export interface MsBusinessAccountMgmtAccount {
  account: Account;
  initiator: Initiator;
  recipient: Recipient;
}

export interface Account {
  _id: string;
  createdAt: Date;
  /**
   * A valid username
   */
  createdBy?: string;
  mainAddress: MainAddress;
  membership?: Membership[];
  name: string;
  /**
   * A valid username
   */
  owner: string;
  updatedAt: Date;
}

export interface MainAddress {
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  country: string;
  stateProvinceRegion?: string;
  streetNumberHouseName: string;
  unitNumber?: string;
  zipPostalCode: string;
}

export interface Membership {
  /**
   * The username of the actor setting this membership
   */
  createdBy: string;
  dateFrom: Date;
  dateTo: Date;
  /**
   * The higher the number the higher the level, eg level 0 is entry where as level 3 could be
   * gold
   */
  level: number;
  type: Type;
}

export enum Type {
  The3Pie = '3pie',
}

export interface Initiator {
  firstName: string;
  lastName: string;
  username: string;
}

export interface Recipient {
  firstName: string;
  lastName: string;
  username: string;
}
