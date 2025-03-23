# Step 1: Build the Next.js App
FROM node:20-alpine AS builder
WORKDIR /app

# Copy only necessary files to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile --legacy-peer-deps --no-audit

# Copy the rest of the application
COPY . .

# Disable telemetry for faster builds
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js app
RUN npm run build && \
    rm -rf node_modules && \
    npm install --production --frozen-lockfile --legacy-peer-deps --no-audit

# Step 2: Serve with Next.js built-in server (Minimal Image)
FROM node:20-alpine
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Reduce image size further
RUN npm cache clean --force && \
    rm -rf /tmp/* /var/cache/apk/*

# Expose port for host access
EXPOSE 3000

# Start Next.js application
CMD ["npm", "run", "start"]
