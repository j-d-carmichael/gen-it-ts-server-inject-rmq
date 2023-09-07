import { fetchAndEmitPermissions } from '@/common-utils/permissions';
import RabbitMQService from '@/events/rabbitMQ/RabbitMQService';
import { MsRolesPermissionsRequest } from '../rabbitMQ/interfaces';
import packageJson from '../../../package.json';

export default async (
  payload: MsRolesPermissionsRequest,
  operationId?: string
): Promise<void> => {
  await fetchAndEmitPermissions({ packageJsonName: packageJson.name, RabbitMQService });
};
