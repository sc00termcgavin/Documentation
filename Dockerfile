# Use the official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Docusaurus site
RUN npm run build

# Install 'serve' to serve the static site
RUN npm install -g serve

# Expose the port that the app will run on
EXPOSE 3000

# Command to serve the built site
CMD ["serve", "-s", "build", "-l", "3000"]