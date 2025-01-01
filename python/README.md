# hello-world python

Source: https://github.com/GoogleCloudPlatform/kubernetes-engine-samples/tree/main/quickstarts/languages/python


```bash

docker login -u devttao -p dckr_xxxx


docker build -t devttao/hello-python .

docker push devttao/hello-python:latest

docker tag devttao/hello-python:latest devttao/hello-python:v2.0
docker push devttao/hello-python:v2.0

docker run -it -d -p 8081:8080 devttao/hello-python:v1.0
curl localhost:8081
docker run -it -d -p 8082:8080 devttao/hello-python:v2.0
curl localhost:8081

# devttao/hello-python   latest    24d04239acb7   6 minutes ago   139MB
```

