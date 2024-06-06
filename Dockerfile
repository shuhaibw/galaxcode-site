# Use an official Node.js 18 LTS runtime (Alpine version) as a parent image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application's code
COPY . .

# Build the application
RUN npm run build

# Production environment
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install production dependencies
COPY --from=build /app/package*.json ./
RUN npm install --only=production

# Copy built app from build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Expose port 3000
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "start"]
