# Use an official Node.js image as the base
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

