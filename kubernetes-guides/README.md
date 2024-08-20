# Installation of Kubernetes locally

## Prerequisites

- Install `kubectl` and `minikube`, and running `minikube` in the background

```bash
  brew install kubectl minikube
  kubectl version --client
  minikube start
```

- In case of MacOS, we can use `minikube` with `docker` driver. But it is also possible to use [other virtual machine drivers](https://minikube.sigs.k8s.io/docs/drivers/)

```bash
  minikube start --driver=virtualbox
```

## Running Kubernetes locally, automatically with minikube

- Must push docker image to Docker hub first. Minikube cannot pull local images

```bash
  kubectl get pods
  kubectl get deployment
  kubectl delete deployment first-app
```

```bash
  kubectl create deployment first-app --image=thangtran3112/kub-first-app
  kubectl get deployment
  kubectl get pods
  minikube dashboard
```

## Expose Kubernetes

- ClusterIP: A cluster IP address is assigned to the service. The service can be accessed from outside the cluster through IP address.
- LoadBalancer: A load balancer is used to expose the service on all nodes in the cluster. Minikube and cloud providers that support load balancers can use this type of service.

```bash
  kubectl expose deployment first-app --port=8080 --type=LoadBalancer
  kubectl get services
```

- Open the running node application on the browser:

```bash
  minikube service first-app
```

- Add Replica Pod

```bash
  kubectl scale deployment first-app --replicas=3
```

- Update a new image, must change and use specific tag (for example version `2`)

```bash
  docker build -t thangtran3112/kub-first-app:2 .
  docker push thangtran3112/kub-first-app:2
  kubectl set image deployment/first-app kub-first-app=thangtran3112/kub-first-app:2
```
