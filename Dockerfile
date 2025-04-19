# ┌─────────────── Build Stage ───────────────┐
FROM node:18-alpine AS builder

# Set working dir
WORKDIR /app

# Copy package definitions
COPY package.json package-lock.json* ./

# Install deps
RUN npm ci

# Copy all source files
COPY . .

# Build the Next app
RUN npm run build

# └───────────────────────────────────────────┘


# ┌─────────────── Run Stage ────────────────┐
FROM node:18-alpine AS runner

WORKDIR /app

# Only install prod deps (fresh) to keep image small
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy built assets and public folder from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# If you have next.config.js or other needed config
COPY --from=builder /app/next.config.js ./

# Expose default Next.js port
EXPOSE 3000

# Set NODE_ENV for optimal performance
ENV NODE_ENV=production

# Launch the app
CMD ["npm", "run", "start"]
# └───────────────────────────────────────────┘
