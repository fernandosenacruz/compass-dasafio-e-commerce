FROM node:22-alpine AS builder

WORKDIR /opt/render/project/src

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /opt/render/project/src

COPY --from=builder /opt/render/project/src/dist ./dist
COPY --from=builder /opt/render/project/src/package*.json ./

EXPOSE 3000

CMD ["node", "dist/server.js"]
