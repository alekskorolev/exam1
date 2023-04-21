FROM node:18.14.0

COPY src /app/src
COPY public /app/public
COPY *.* /app/
WORKDIR /app
RUN npm install

CMD ["npm", "run", "serve"]
