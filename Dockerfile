# ---- Base Node ----
FROM node:18-alpine AS base
# set working directory
WORKDIR /app
# copy project files
COPY package.json yarn.lock ./


# ---- Build ----
FROM base AS builder
RUN yarn install --development
COPY . .
RUN yarn db:gen
RUN yarn nx build todo-api

# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN yarn install --prod

# ---- Release ----
FROM base AS release
# copy node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn db:gen

# expose port and define CMD
EXPOSE 3000
CMD ["node", "./dist/apps/todo-api/main.js"]
