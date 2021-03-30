FROM node:14.16.0-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --silent

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]