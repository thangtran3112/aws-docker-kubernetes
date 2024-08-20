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

## Rollback and History

- For example, change the image to an unknown version, such as: `kubectl set image deployment/first-app kub-first-app=thangtran3112/kub-first-app:3`

```bash
  kubectl rollout status deployment/first-app
  kubectl rollout undo deployment/first-app
  kubectl rollout history deployment/first-app
  kubectl rollout history deployment/first-app --revision=3
```

- Undo to a specific `--revision`:

```bash
  kubectl rollout undo deployment/first-app --revision=1
```

- Delete:

```bash
  kubectl delete service first-app
  kubectl delete deployment first-app
```

## [Deployment yaml with Kubernetes](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#deployment-v1-apps)

- [Link for yaml api](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#deployment-v1-apps)
- [Tutorials](https://spacelift.io/blog/kubernetes-deployment-yaml)

```bash
  kubectl apply -f=deployment.yaml
```

- Change of deployment.yaml, we can just re-apply the command. For instance: changed DockerHub image

## [Service yaml with Kubernetes](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#service-v1-core)

```bash
  kubectl apply -f=service.yaml
  minikube service backend
```

## Delete

```bash
  kubectl delete -f=deployment.yaml -f=service.yaml
```

## Selector to match pods

```yaml
matchExpressions:
  - { key: app, operator: NotIn, values: [second-app, first-app] }
```

- We can also match pods by group labels, and we can delete all the pods that match the selector:

```yaml
metadata:
  name: second-app-deployment
  labels:
    group: example
```

```bash
  kubectl delete deployments,services -l group=example
  # or
  kubectl delete -l group=example
```

## [Health check with liveness probe](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#probe-v1-core)

```yaml
livenessProbe:
  httpGet:
    path: /healthcheck
    port: 8080
  initialDelaySeconds: 3
  periodSeconds: 3
```

## Force always pulling image (default is pulling latest image)

```yaml
imagePullPolicy: Always
```
