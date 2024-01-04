FROM node:20.10.0-alpine3.19
WORKDIR /app
COPY package*.json .
RUN ["npm", "install"]
COPY . .
ENV API_URL="https://example.com/"
EXPOSE 3000
# RUN addgroup app && adduser -S -G app app
# USER app
CMD [ "npm", "start" ]
