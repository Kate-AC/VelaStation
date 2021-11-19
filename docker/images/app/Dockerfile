FROM node:16-alpine3.12

RUN apk update \
  && apk upgrade \
  && apk add curl \
  && apk add bash

WORKDIR /project/VelaStationWeb
ADD ./vela_station/* .

RUN npm upgrade
RUN npm install
