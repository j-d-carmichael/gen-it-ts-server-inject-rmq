# gen-it-inject-liffery-server

This override extends and modifies the base generate-it ts server with the required additives for RMQ and shared utils.

Ensure you remove what you do not require from the stack before starting.

## Getting started

1. See the .nodegenrc file.
   1. "src/services/AccessTokenService.ts" & "src/services/PermissionService.ts" are removed.
   2. src/http/nodegen/middleware imports the handlers for permissions and access token from the common-utils.
2. A cache folder is present:
   1. This expects a connection to a redis database
   2. Connection is established in the app.ts
   3. The cache has a max life and a hook to repopulate when the said life is reached.
3. RMQ is used as a fanout exchange for emitted common data between services
   1. Connection is established in the app.ts
   2. The RMQ definition is expected in the mono-repo
   3. It declares typed models of data payloads transmitted between services
   4. Important to note that RMQ here is used as a fanout exchange, meaning that all services will receive the message.
