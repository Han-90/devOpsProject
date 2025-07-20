FROM node:18-alpine
WORKDIR /app
COPY ./client ./
RUN npm install && npm run build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
