# This app will requires communications between containers

- If installing MongoDB in host machine, Docker app can reach out to: `host.docker.internal`, which is the IP address of the host machine, from the view of the Docker app.

```ts
mongoose.connect("mongodb://host.docker.internal:27017/swfavorites", {
  useNewUrlParser: true,
});
```

## Networking between containers

- No need to add `-p 3000:80` or any port mappings, if you do not want to expose port to outside host.

```bash
docker network create commonnetwork
docker run -d --name mymongo --network commonnetwork mongo
docker run -d --name myapp--network commonnetwork myapp:latest -p 3000:3000
```

- Now you can access mongodb from your app through `mymongo` container name:

```ts
mongoose.connect("mongodb://mymongo:27017/swfavorites", {
  useNewUrlParser: true,
});
```

## Connect to MongoDB container with Ip address

- Create a separate container for MongoDB from DockerHub: `$ docker run --name some-mongo -d mongo:tag`
- [Detail Instructions](https://hub.docker.com/_/mongo)
- Use `docker inspect some-mongo` to check the container IP address.
- Copy the mongo container IP address to the Node Js app:

```ts
mongoose.connect("mongodb://127.0.0.12:27017/swfavorites", {
  useNewUrlParser: true,
});
```
