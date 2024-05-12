FROM node:20 as build

WORKDIR /code

COPY ./package.json ./package-lock.json ./openapi-nodegen-api-file.yml /code/
RUN npm i

COPY . /code/
RUN npm run build

# multi stage build
# runtime - only install prod deps, use the already built code from the build stage
FROM node:20-alpine as runtime

WORKDIR /code

COPY --from=build /code/package.json /code/package.json
COPY --from=build /code/package-lock.json /code/package-lock.json
COPY --from=build /code/node_modules /code/node_modules
COPY --from=build /code/openapi-nodegen-api-file.yml /code/openapi-nodegen-api-file.yml
COPY --from=build /code/build /code/build

COPY ./docker-entrypoint.sh /sbin/

#RUN npm ci --omit=dev
RUN chmod 755 /sbin/docker-entrypoint.sh

ENTRYPOINT [ "/sbin/docker-entrypoint.sh" ]
CMD ["prod"]

