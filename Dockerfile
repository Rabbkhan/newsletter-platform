# Step 1: Use an official Node.js runtime as the base image
FROM node:22-alpine AS base

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Install pnpm globally
RUN npm install -g pnpm

# Step 4: Copy only package.json and pnpm-lock.yaml first
COPY package.json pnpm-lock.yaml ./

# Step 5: Install dependencies using pnpm
RUN pnpm install

# Step 6: Copy the entire application source code
COPY . .

# Step 7: Increase memory limit and build the app
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm build

# Step 8: Expose the port for the Next.js server
EXPOSE 3000

# Step 9: Command to start the app in production mode
CMD ["pnpm", "start"]

# CMD pnpm dev

# docker run -p 3000:3000 newsletter-platform

# {
#   "dns": ["8.8.8.8", "8.8.4.4"]
# }

# docker build -t newsletter-platform .
