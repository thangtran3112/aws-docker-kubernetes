# Pushing to Docker Hub

## Must create an image with exact the same name and tag with Docker Hub:

```bash

docker build -t thangtran3112/node-hello-world:latest .
docker push thangtran3112/node-hello-world:latest
```

- Or rename if there is an existing image

```bash
docker tag <ExistingNameTag> thangtran3112/node-hello-world:lastest
```

## Login

```bash
docker login
docker logout
```

## Pull image from Docker Hub

```bash
docker pull thangtran3112/node-hello-world:latest
```
