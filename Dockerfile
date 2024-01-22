FROM node:18.17.0-alpine3.18 

WORKDIR /apps
COPY . /apps/
# Install dependencies
RUN yarn install 

# Expose port 3000 for production
EXPOSE 3000

# Command to run the application in production
CMD ["yarn", "start"]


