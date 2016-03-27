FROM node

ADD package.json /app/package.json
RUN cd /app && npm install && rm -rf ~/.npm

ADD src /app/src

WORKDIR /app

ENTRYPOINT ["node", "src/server.js"]
EXPOSE 3000
