# hello-world GO

Source: [kubernetes-engine-samples/tree/main/quickstarts/hello-app](https://github.com/GoogleCloudPlatform/kubernetes-engine-samples/tree/main/quickstarts/hello-app)

```bash
docker build -t devttao/hello-go .
docker push devttao/hello-go:latest

docker tag devttao/hello-go:latest devttao/hello-go:v2.0
docker push devttao/hello-go:v2.0

docker run -it -d -p 9001:8080 devttao/hello-go:v1.0
curl localhost:9001
docker run -it -d -p 9000:8080 devttao/hello-go:v2.0
curl localhost:9002


# devttao/hello-go       latest    359098e632a7   3 days ago      27.6MB
```

