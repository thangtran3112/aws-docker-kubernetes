# Docker Commands

## 1. Build Docker Image

```bash
docker build . -t first-demo
docker image ls
```

## 2. Run Docker Image

```bash
docker run -p 3000:3000 first
docker container ls
docker container kill <ContainerId>
docker container stop <ContainerId>
```

## 3. Directly run Docker Image

```bash
docker run node
docker ps -a
```

- Interactive mode, maintain the session with `node` container:

```bash
docker run node -it
```

## 4. Start the container in the background

```bash
docker start <ContainerId>
docker stop <ContainerId>
```

## 5. Detached Mode or attach a background running container

```bash
docker run bfdbe8268d21 -p 8000:80 -d <ImageId>
docker attach <NameOrId>
```

- Start the container in background and listening to log

```bash
docker start <ContainerIdOrName>
docker logs -f <ContainerIdOrName>
```

- Start and attach the container directly

```bash
docker start -a <ContainerIdOrName>
```

## 6. Remove the container, must stop the container first

```bash
docker images
docker rm <ContainerIdOrName>
```

- Remove stopped containers automatically:

```bash
docker run -p 3000:80 -d --rm <ContainerIdOrName>
```

## 7. Remove the image. Must remove all related containers first.

```bash
docker rmi <ImageId>
```

- Remove all unused images: `docker image prune` or `docker image prune -a`
- Remove all unused containers: `docker container prune` or `docker container prune -a`

## 8. Copy inside and outside the container

```bash
docker cp <PathOutsideContainer> <ContainerIdOrName>:<PathInsideContainer>
docker cp dummy/. boring_vaughant:tmp
docker cp <ContainerIdOrName>:<PathInsideContainer> <PathOutsideContainer>
docker cp boring_vaughant:tmp/text.txt dummyFolder
```

## 9. Name and Tagging

- Image can have `name:tag` format. Such as `FROM node:10.15.0-alpine`
- Tag is only possible for Image

```bash
docker build -t second:latest .
docker build -t second:v2 .
```

- Name is only possible for Container

```bash
docker run -p 3000:80 -d --rm --name secondapp <ImageId>
```
