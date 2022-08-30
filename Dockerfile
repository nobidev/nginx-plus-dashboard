FROM nobidev/node

COPY package.json yarn.lock /app/
WORKDIR /app

RUN yarn

COPY ./ ./
RUN yarn build

FROM nginx
COPY --from=0 /app/dist/ /usr/share/nginx/html
