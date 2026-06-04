# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package.json tsconfig.json ./

# Install all dependencies (including devDependencies needed for CRA build)
# Force ajv@8 to fix react-scripts@5 + ajv-keywords version conflict
RUN npm install --legacy-peer-deps && \
    npm install --legacy-peer-deps ajv@^8

# Copy source
COPY public/ ./public/
COPY src/ ./src/

# Build production bundle
RUN npm run build

# ── Stage 2: Serve ───────────────────────────────────────────────────────────
FROM nginx:stable-alpine AS runner

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx config for React Router (client-side routing support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
