#!/usr/bin/env bash
# This is for build develop environment

# build dev container
docker build -t devttao/nodejs-kutao .

# delete dev container
docker rm -f devttao/nodejs-kutao &> /dev/null

# push latest
docker push devttao/nodejs-kutao:latest

# tag and push v2.0
docker tag devttao/nodejs-kutao:latest devttao/nodejs-kutao:v2.0
docker push devttao/nodejs-kutao:v2.0

# start dev container
# docker run -it -d -p 8081:80 --name nodejs-kutao_container devttao/nodejs-kutao

