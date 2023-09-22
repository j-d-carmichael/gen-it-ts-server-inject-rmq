import connect from 'async-redis-shared/connect';
import { fetchAndEmitPermissions } from '@/common-utils/permissions';
import config from '@/config';
import RabbitMQService from '@/events/rabbitMQ/RabbitMQService';
import packageJson from '../../package.json';

export default async () => {
  // Required connections
  await connect(config.redis);
  await RabbitMQService.setup(config.rabbitMQ);

  // Permissions: Emit this services permissions to the Q
  await fetchAndEmitPermissions({ packageJsonName: packageJson.name, RabbitMQService });
}
