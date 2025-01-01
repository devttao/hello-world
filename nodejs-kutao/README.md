# docker-nodejs

How to use
```shell script
docker login -u devttao -p dckr_xxxx

docker pull devttao/nodejs-kutao:latest
docker run -it -d -p 8081:80 --name nodejs-kutao_container devttao/nodejs-kutao:V1.0
curl localhost:8081
docker run -it -d -p 8082:80 --name nodejs-kutao_container devttao/nodejs-kutao:V2.0
curl localhost:8082
```

Docker Hub : 
- [devttao/nodejs-kutao](https://hub.docker.com/repository/docker/devttao/nodejs-kutao)

