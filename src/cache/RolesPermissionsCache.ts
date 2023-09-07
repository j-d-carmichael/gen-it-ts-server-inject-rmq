import { DistributedSystemsCache } from 'distributed-systems-cache';
import RabbitMQService from '@/events/rabbitMQ/RabbitMQService';
import packageJson from '../../package.json';

export interface MsRolesPermissionsRole {
  permissions: string[];
  roleName: string;
}

export default new DistributedSystemsCache<MsRolesPermissionsRole>({
  cacheKeyPrefix: 'RolesPermissionsCache:',
  cacheMaxAgeMs: 60 * 60 * 1000,
  cachePopulator: async () => {
    RabbitMQService.publishMsRolesPermissionsRolesRequestPublish({
      fromService: packageJson.name
    });
  }
});
