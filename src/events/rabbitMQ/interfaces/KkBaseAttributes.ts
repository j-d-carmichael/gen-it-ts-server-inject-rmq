export interface KkBaseAttributes {
  authDetails: AuthDetails;
  operationType: OperationType;
  realmId: string;
  representation?: string;
  resourcePath: string;
  resourceType: ResourceType;
  resourceTypeAsString: ResourceType;
  time: number;
}

export interface AuthDetails {
  clientId?: string;
  ipAddress?: string;
  realmId?: string;
  userId?: string;
}

export enum OperationType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE',
}

export enum ResourceType {
  User = 'USER',
}
