# DESCRIPTION:      Docker file for AFEClassroom
# AUTHOR:           Big Guy James <haizywoop@gmail.com>

FROM alpine:latest

RUN apk add --no-cache nodejs npm
