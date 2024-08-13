## Dockerize backend

- Use docker volume and `nodemon` to sync latest changes between the backend and the container.

```bash
docker build -t goals-node .
docker run --name goals-backend --rm -d -p 80:80 -v $(pwd):/app goals-node
```

## Dockerize frontend

```bash
docker build -t goals-react .
docker run --name goals-frontend --it --rm -p 3000:3000 goals-react
```

## Dockerize MongoDB in the same network with the backend

- Use docker volume to make sure MongoDB data is not lost.

```bash
docker run --name mongodb --rm  -d -p 27017:27017 mongo:latest
```

## Network

```bash
docker network create goals-net
docker run --name mongodb --rm -d --network goals-net mongo:latest
docker run --name goals-backend --rm -d --network goals-net -p 80:80 goals-node
docker run --name goals-frontend --it --rm -p 3000:3000 goals-react
```

- The frontend is running on the browser, not in the frontend container. So we do not need the frontend container to be in the same network with the backend. We need to use `localhost` so the browser understand, how to reach the Backend.

```ts
const response = await fetch("http://localhost/goals");
```

- Browser -> frontend server -> backend server -> MongoDB.

## Persist Mongo DB data with Named Volume

```bash
docker run --name mongodb --rm -d -network goals-net -v data:/data/db -e MONGO_INITDB_ROOT_USERNAME=test -e MONGO_INITDB_ROOT_PASSWORD=secret mongo:latest

docker run --name mongodb --rm -d -network goals-net -v data:/data/db -e MONGO_USERNAME=test -e MONGO_PASSWORD=secret mongo:latest
```

## Link App development with Docker container watching for changes

- Persist logs folder in the container
- Bind mount all changes in `/app` folder to make changes reflected in the container

```bash
docker run --name goals-backend --rm -d -p 80:80 -v logs:/app/logs --network goals-net -v $(pwd):/app  -v /app/node_modules goals-node
```

## Bind mount Frontend to sync changes with container

```bash
 docker run -v $(pwd):/app -it --rm -name goals-frontend p:3000:3000 goals-react
```
