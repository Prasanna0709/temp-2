# Build Stage
FROM node:24.5.0-alpine as Build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 
RUN npm run build

# nginx config stage 
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./my-nginx-config.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx" , "-g" , "daemon off;"]