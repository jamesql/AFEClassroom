# DESCRIPTION:      Docker file for AFEClassroom
# AUTHOR:           Big Guy James <haizywoop@gmail.com>

# Alpine Linux base image
FROM alpine:latest

# Install NodeJS & Npm
RUN apk add --no-cache nodejs npm

# Set work directory
WORKDIR /afe

# Copy source to workdir
COPY . /afe

# Install deps
RUN npm install
