import { MsRolesPermissionsRoles } from '../rabbitMQ/interfaces';
import RolesPermissionsCache from '@/cache/RolesPermissionsCache';

export default async (
  payload: MsRolesPermissionsRoles,
  operationId?: string
): Promise<void> => {
  await RolesPermissionsCache.clearAllCacheRecords();
  for (let i = 0; i < payload.length; ++i) {
    await RolesPermissionsCache.setCache(payload[i].roleName, payload[i]);
  }
};
