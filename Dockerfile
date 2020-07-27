FROM node:alpine

RUN mkdir /src

WORKDIR /src

ADD ./dist/ /src/dist/
ADD ./packages/api/package.json /src/packages/api/package.json
ADD ./package.json /src/package.json
ADD ./lerna.json /src/lerna.json

RUN yarn install
RUN yarn boot

# EXPOSE 5000
# ENV PORT 5000

CMD yarn serve