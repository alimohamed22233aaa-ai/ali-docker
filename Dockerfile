FROM node:26 AS development
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN npm install
COPY  . .
EXPOSE 4000
CMD ["npm","run","start-dev"]

FROM node:26 AS production
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN npm install --only=production
COPY  . .
EXPOSE 4000
CMD ["npm","start"]