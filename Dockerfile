# Dockerfile
FROM node:22

# Set app directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

# COPY . .
# jfnvjfn
#Sudhanshu Guptakal appna
# Expose your app's port
EXPOSE 3000

CMD ["node", "index.js"]
