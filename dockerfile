# Etapa de Build
FROM node AS build

WORKDIR /App

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node

WORKDIR /App

COPY --from=build /App /App

EXPOSE 3000

CMD ["npm", "start"]
