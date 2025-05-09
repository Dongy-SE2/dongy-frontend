# FROM node:23-alpine3.20
#
# WORKDIR /app
#
# COPY package.json package-lock.json ./
# RUN npm ci
#
# COPY . .
#
# EXPOSE 3000
#
# CMD ["npm", "run", "dev"]


FROM node:23-alpine3.20 AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_OMISE_PUBLIC_KEY
ENV NEXT_PUBLIC_OMISE_PUBLIC_KEY=$NEXT_PUBLIC_OMISE_PUBLIC_KEY

RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
