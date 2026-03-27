# Base image
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy all files
COPY . .

# Expose port (informational)
EXPOSE 3001

# Start server
CMD ["npm", "start"]