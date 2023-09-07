const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs-extra');
const packageJson = require('./package.json');

// import the test env
const dotEnvTestFilePath = path.join(process.cwd(), '.env.test');
if (fs.existsSync(dotEnvTestFilePath)) {
  dotenv.config({ path: dotEnvTestFilePath });
}

// setting unique database name
process.env.MONGO_DB = packageJson.name + '_test_' + (new Date()).getTime();
// The other database details are set either by the .env.test file or via the github secrets
process.env.MONGO_HOST = process.env.TEST_MONGO_HOST;
process.env.MONGO_PW = process.env.TEST_MONGO_PW;
process.env.MONGO_PORT = process.env.TEST_MONGO_PORT;
process.env.MONGO_PROTOCOL = process.env.TEST_MONGO_PROTOCOL;
process.env.MONGO_USER = process.env.TEST_MONGO_USER;
process.env.MONGO_ADDITIONAL_PARAMS = process.env.TEST_MONGO_ADDITIONAL_PARAMS;

// Setup required proc envs
process.env.JWT_ACCESS_SECRET = 'changeme';
