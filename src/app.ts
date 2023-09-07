import http, { Http } from '@/http';
import connect from 'async-redis-shared/connect';
import config from '@/config';
import RabbitMQService from './events/rabbitMQ/RabbitMQService';
import { httpExceptionErrorHandler } from 'common-utils/expressMiddleware';
// import AllEddys from '@/services/eddys/AllEddys';
import packageJson from '../package.json';
import { fetchAndEmitPermissions } from 'common-utils/permissions';

/**
 * Returns a promise allowing the server or cli script to know
 * when the app is ready; eg database connections established
 */
export default async (port: number): Promise<Http> => {
  // Here is a good place to connect to databases if required or setup
  // filesystems or any other async action required before starting:
  await connect(config.redis);

  await RabbitMQService.setup(config.rabbitMQ);
  await fetchAndEmitPermissions({ packageJsonName: packageJson.name, RabbitMQService });

  // Return the http layer, to inject custom middleware pass the HttpOptions
  // argument. See the @/http/index.ts
  return http(port, {
    httpException: {
      errorHook: httpExceptionErrorHandler(
        (err: any) => RabbitMQService.publishMsNotificationEmailTransactionalHttpExceptionPublish(err),
        await import('package.json')
      )
    }
  });
};
