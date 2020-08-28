# build environment
FROM theasp/clojurescript-nodejs:alpine as build
COPY . /usr/src/app
WORKDIR /usr/src/app
CMD ["lein", "prod"]

# production environment
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/resources/public/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
