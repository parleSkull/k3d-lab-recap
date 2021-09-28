FROM node:current-buster-slim
COPY package.json /app/
COPY package-lock.json /app/
WORKDIR /app
RUN npm install
COPY src/*.js /app/src/
ENTRYPOINT ["npm", "start"]
