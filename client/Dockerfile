# Use lightweight Node.js image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files first for caching
COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose Vite default port
EXPOSE 5173

# Run Vite dev server (hot reload)
CMD ["npm", "run", "dev"]

