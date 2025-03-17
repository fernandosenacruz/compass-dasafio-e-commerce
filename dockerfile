FROM node:22-alpine AS builder

WORKDIR ~/project/src

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN ls -R dist

FROM node:22-alpine

WORKDIR ~/project/src

COPY --from=builder ~/project/src/dist ./dist
COPY --from=builder ~/project/src/package*.json ./

EXPOSE 3000

CMD ["node", "dist/server.js"]
