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
