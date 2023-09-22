import { DistributedSystemsCache } from 'distributed-systems-cache';
import RabbitMQService from '@/events/rabbitMQ/RabbitMQService';
import packageJson from '../../package.json';

export interface MsRolesPermissionsRole {
  permissions: string[];
  roleName: string;
}

export default new DistributedSystemsCache<MsRolesPermissionsRole>({
  cacheKeyPrefix: `${packageJson.name}_rolesPermissionsCache:`,
  cacheMaxAgeMs: '1Hour',
  cachePopulator: async () => {
    RabbitMQService.publishUsersRolesAndPermissionsRolesRequestAll({
      requestFrom: packageJson.name,
      requestTime: new Date()
    });
  }
});
