# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy all files
COPY . .

# Expose port
EXPOSE 3001

# Start server
CMD ["node", "server.js"]