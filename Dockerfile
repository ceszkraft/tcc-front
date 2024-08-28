FROM node:20-alpine AS build
WORKDIR /usr/local/app
COPY ./package.json .
RUN npm install -g npm@latest
COPY . .
RUN npm run build
CMD ["npm", "start"]

# -- >> WORKING << --
FROM nginx:latest as runtime
                                    #  {project name}
COPY --from=build /usr/local/app/dist/tcc-front /usr/share/nginx/html
EXPOSE 80


