# 🧩 Step 1: Use lightweight Node.js image
FROM node:22-alpine

# 🧩 Step 2: Set working directory inside container
WORKDIR /app

# 🧩 Step 3: Copy dependency files first (for Docker caching)
COPY package*.json ./

# 🧩 Step 4: Install only production dependencies
RUN npm install --production

# 🧩 Step 5: Copy the rest of the backend code
COPY . .

# 🧩 Step 6: Expose backend port
EXPOSE 5000

# 🧩 Step 7: Set environment to production
ENV NODE_ENV=production

# 🧩 Step 8: Start the backend server
CMD ["npm", "start"]
