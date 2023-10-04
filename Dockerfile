FROM node:18 as build

WORKDIR /code

# if package lock doesnt change, we dont install
COPY ./package.json ./package-lock.json ./openapi-nodegen-api-file.yml /code/
#RUN npm audit --omit=dev
RUN npm i

# rebuild and lint on any code changes
COPY . /code/
#RUN npm run lint
RUN npm run build

# multi stage build
# runtime - only install prod deps, use the already built code from the build stage
FROM node:18-alpine as runtime

WORKDIR /code

COPY --from=build /code/openapi-nodegen-api-file.yml /code/openapi-nodegen-api-file.yml
COPY --from=build /code/package.json /code/package.json
COPY --from=build /code/package-lock.json /code/package-lock.json
RUN npm ci --omit=dev

COPY --from=build /code/build /code/build
# some project-specific extra files to "mount" in
#eg COPY --from=build /code/database /code/database

COPY ./docker-entrypoint.sh /sbin/
RUN chmod 755 /sbin/docker-entrypoint.sh

ENTRYPOINT [ "/sbin/docker-entrypoint.sh" ]
CMD ["prod"]

