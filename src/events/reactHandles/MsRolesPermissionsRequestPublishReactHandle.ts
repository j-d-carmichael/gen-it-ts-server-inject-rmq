import { MsRolesPermissionsRequest } from '../rabbitMQ/interfaces';
import { fetchAndEmitPermissions } from 'common-utils/permissions';
import packageJson from '../../../package.json';
import RabbitMQService from '@/events/rabbitMQ/RabbitMQService';

export default async (
  payload: MsRolesPermissionsRequest,
  operationId?: string
): Promise<void> => {
  await fetchAndEmitPermissions({ packageJsonName: packageJson.name, RabbitMQService });
};
