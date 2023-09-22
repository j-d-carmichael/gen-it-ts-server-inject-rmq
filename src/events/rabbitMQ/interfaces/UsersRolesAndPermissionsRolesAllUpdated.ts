export interface UsersRolesAndPermissionsRolesAllUpdated {
  allRoles: AllRole[];
}

export interface AllRole {
  permissions: string[];
  roleName: string;
}
