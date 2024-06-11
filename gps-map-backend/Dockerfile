# Use the official Node.js image as the base image
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Prisma schema file to the working directory
COPY src/prisma ./src/prisma/

# Copy the rest of the project files
COPY . .

# Set environment variable for database connection
ENV DATABASE_URL="postgresql://root:12345@host.docker.internal:5432/mydatabase?schema=public"

# Generate the Prisma client
RUN npx prisma generate --schema=./src/prisma/schema.prisma

# Build the NestJS application
RUN npm run build

# Expose the port on which your application will run
EXPOSE 5000

# Define the command to run the migrations and then start the application
CMD ["sh", "-c", "npx prisma migrate deploy --schema=./src/prisma/schema.prisma && npm run start:prod"]
