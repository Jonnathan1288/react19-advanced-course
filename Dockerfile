# Step 1: Build
FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Web Server
FROM nginx:alpine
# Copy the React build output to Nginx's default public folder
COPY --from=build /app/dist /usr/share/nginx/html
# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]