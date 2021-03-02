# DESCRIPTION:      Docker file for AFEClassroom
# AUTHOR:           Big Guy James <haizywoop@gmail.com>

# Alpine Linux base image
FROM alpine:latest

# Install NodeJS & Npm
RUN apk add --no-cache nodejs npm
