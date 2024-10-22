# Offcial node runtime as a parent image
From node:16

# Set the working directory to /app
WORKDIR /app

#Copy package and package-lock json to working directory
COPY ./package*.json ./

#install dependencies
RUN npm install

#copy remaining application files to working directory
COPY . .

# Build the application
RUN npm run build

#expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]