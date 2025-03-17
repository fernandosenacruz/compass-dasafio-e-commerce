FROM node:22-alpine AS builder

WORKDIR /opt/render/project

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /opt/render/project

COPY --from=builder /opt/render/project/dist ./dist
COPY --from=builder /opt/render/project/package*.json ./

EXPOSE 3000

CMD ["node", "dist/server.js"]
