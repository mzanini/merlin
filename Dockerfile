FROM node:12.9.1

RUN npm install -g yarn@1.16.0

WORKDIR /app

# As the root user, give the node user access to the working directory
RUN chown -R node /app

USER node

COPY --chown=node package.json /app/
COPY --chown=node yarn.lock /app/
COPY --chown=node .yarnrc /app/
RUN yarn install

# The web app is served on port 8081
EXPOSE 8081

CMD ["yarn", "dev"]