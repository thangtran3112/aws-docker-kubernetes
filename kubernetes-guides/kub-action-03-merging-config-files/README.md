# Merging service and deployment configuration files

## `Service` is generally declared before `deployment` inside `master-deployment.yaml` file

- Service will keep polling to find all the pods matching its selector, even when pods are created afterward with `deployment` configs.

```bash
kubectl apply -f=master-deployment.yaml
```
