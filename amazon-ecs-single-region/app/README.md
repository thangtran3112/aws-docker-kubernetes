# Containing your app with Docker:

- Video Tutorial: [Docker with AWS Fargate](https://www.youtube.com/watch?v=VDhqQl-F5Gc&list=PL5dAXcy9iz3SEd3vEute8QdNYDeLLAxKJ)

```bash
cd book-service
docker build -t express-book-app .
docker run -p 3000:3000 express-book-app
```

## AWS CLI for create ECR repository

```bash
aws ecr create-repository --repository-name express-book-app
```

- After creating the repository, you can push the image to the repository.
  ![ECR View Push Command](../ECRViewPushCommand.png)

```bash
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 654654352356.dkr.ecr.us-west-2.amazonaws.com
docker build -t express-book-app .
docker tag express-book-app:latest 654654352356.dkr.ecr.us-west-2.amazonaws.com/express-book-app:latest
docker images
docker push 654654352356.dkr.ecr.us-west-2.amazonaws.com/express-book-app:latest
```
