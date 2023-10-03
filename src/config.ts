import dotenv from 'dotenv';
import { ProcEnvHelper } from 'proc-env-helper';
import packageJson from '../package.json';

dotenv.config();


export default {
  // Swagger file
  loadSwaggerUIRoute: ProcEnvHelper.getOrSetDefault('LOAD_SWAGGER_UI_ROUTE', false),
  swaggerBasicAuth: [{
    basicAuthUname: String(ProcEnvHelper.getOrSetDefault('SWAGGER_BASIC_AUTH_UNAME', 'user')),
    basicAuthPword: String(ProcEnvHelper.getOrSetDefault('SWAGGER_BASIC_AUTH_PWORD', 'password')),
  }],

  // Instance
  env: ProcEnvHelper.getOrSetDefault('ENVIRONMENT', 'production'),
  port: ProcEnvHelper.getOrSetDefault('PORT', 3501),

  // Cors white list of URLs
  corsWhiteList: ProcEnvHelper.getOrSetDefault('CORS_WHITELIST', '*'),

  // Authentication
  basicAuthUname: ProcEnvHelper.getOrSetDefault('BASIC_AUTH_UNAME', 'user'),
  basicAuthPword: ProcEnvHelper.getOrSetDefault('BASIC_AUTH_PWORD', 'pw'),

  // API keys required to start
  jwtSecret: ProcEnvHelper.requiredOrThrow('JWT_ACCESS_SECRET'),
  apiKey: ProcEnvHelper.requiredOrThrow('API_KEY'),

  // Redis
  redis: {
    // this effectively determines the collection index which is typically an integer
    db: ProcEnvHelper.getOrSetDefault('REDIS_DB', 1),
    url: ProcEnvHelper.getOrSetDefault('REDIS_URL', 'redis://redis:6379'), // docker service is the default
  },

  // Rabbit MQ
  rabbitMQ: {
    connection: {
      protocol: 'amqp',
      hostname: ProcEnvHelper.getOrSetDefault('RABBITMQ_HOST', 'rabbitmq'),
      port: ProcEnvHelper.getOrSetDefault('RABBITMQ_PORT', 5672),
      username: ProcEnvHelper.getOrSetDefault('RABBITMQ_USER', 'admin'),
      password: ProcEnvHelper.getOrSetDefault('RABBITMQ_PW', 'admin'),
      verboseLogging: ProcEnvHelper.getOrSetDefault('RABBITMQ_VERBOSE', true),
    },
    queue: ProcEnvHelper.getOrSetDefault('RABBITMQ_QUEUE', `q.${packageJson.name}`),
    dleQueue: ProcEnvHelper.getOrSetDefault('RABBITMQ_DLE_QUEUE', 'q.dle_queue'),
    dleExchange: ProcEnvHelper.getOrSetDefault('RABBITMQ_DLE_EXCHANGE', 'q.dleExchange'),
    exchange: ProcEnvHelper.getOrSetDefault('RABBITMQ_EXCHANGE', 'main'),
    exchangeType: ProcEnvHelper.getOrSetDefault('RABBITMQ_EXCHANGE_TYPE', 'fanout')
  },

  // request worker config
  requestWorker: {
    processes: Number.parseInt(
      ProcEnvHelper.getOrSetDefault('REQUEST_WORKER_PROCESSES', 1),
      10
    ),
    threadsPerProcess: Number.parseInt(
      ProcEnvHelper.getOrSetDefault('REQUEST_WORKER_THREADS_PER_PROCESS', 10),
      10
    ),
    timeoutMs: Number.parseInt(
      ProcEnvHelper.getOrSetDefault('REQUEST_WORKER_TIMEOUT_MS', 300000), // 5 minutes
      10
    )
  }
};

