FROM registry.dev-abplatform.net/core/kpmg-nginx:latest
MAINTAINER KPMG Luxembourg (lu-dltechnologydataanalytics@kpmg.lu)

ARG GIT_VERSION=""

LABEL git.version=${GIT_VERSION}

ENV CLIENT_ID "00"
ENV SSL "no"

# copy app
COPY build/ /app

# required for app config file generation
RUN mkdir -pv /app/config

# Copy confd folder
COPY docker/confd /etc/confd

HEALTHCHECK NONE
