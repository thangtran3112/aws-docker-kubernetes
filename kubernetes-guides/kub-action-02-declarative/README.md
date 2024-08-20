# Declarative Kubernetes Deployment

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
