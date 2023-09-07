export interface MsArchiverArchive {
  _id?: string;
  /**
   * Naming convention is <service name>_<collection name> ... e.g. ms-roles-permissions_role
   */
  archiveType: string;
  createdAt?: Date;
  /**
   * As JSON.stringify( document )
   */
  data: string;
  modifierUsername: string;
  updatedAt?: Date;
}
