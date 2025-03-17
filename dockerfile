FROM node:22-alpine AS builder

# ajusta para deploy no render.com
WORKDIR /opt/render/project

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /opt/render/project

COPY --from=builder /opt/render/project/src/dist ./src/dist
COPY --from=builder /opt/render/project/package*.json ./

EXPOSE 3000

CMD ["node", "src/dist/server.js"]
