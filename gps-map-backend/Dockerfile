# Use the official Node.js image as the base image
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Install dependencies including dotenv
COPY package*.json ./
RUN npm install dotenv

# Copy the Prisma schema file to the working directory
COPY src/prisma ./src/prisma/

# Copy the rest of the project files
COPY . .

# Install the dotenv-cli package globally
RUN npm install -g dotenv-cli

# Load environment variables from .env file
COPY .env .env

# Generate the Prisma client
RUN dotenv -e .env -- npx prisma generate --schema=./src/prisma/schema.prisma

# Build the NestJS application
RUN npm run build

# Expose the port on which your application will run
EXPOSE 5000

# Define the command to run the migrations and then start the application
CMD ["sh", "-c", "dotenv -e .env -- npx prisma migrate deploy --schema=./src/prisma/schema.prisma && npm run start:prod"]
