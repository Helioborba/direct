FROM node:16.5.0-alpine3.11 as main
WORKDIR /client
COPY ./package.json ./
RUN npm install

# This step is only to fix the dependency in react-spring animations
RUN npm install react-spring --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=main  /client/build /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
