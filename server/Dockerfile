FROM node:18.14.0

COPY src /app/src
COPY *.* /app/

WORKDIR /app
RUN npm install

CMD ["npm", "run", "start"]
