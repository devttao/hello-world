# hello-world nodejs

Source: https://github.com/GoogleCloudPlatform/kubernetes-engine-samples/tree/main/quickstarts/languages/nodejs

```bash
docker login -u devttao -p dckr_xxxx


docker build -t devttao/hello-nodejs .

docker push devttao/hello-nodejs:latest

docker tag devttao/hello-nodejs:latest devttao/hello-nodejs:v2.0
docker push devttao/hello-nodejs:v2.0

docker run -it -d -p 8081:8080 --name hello_nodejs_container devttao/hello-nodejs:v2.0
curl localhost:8081
```