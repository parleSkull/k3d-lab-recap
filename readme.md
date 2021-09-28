# K3D Labs

This repo holds the k3d labs recap knowledge check project for the Nairobi DevSecOps Bootcamp (NDSOBC). The directories are:

* infra/local - use this only once to provision your local env with required tools
* apps/recaplab - sample nodejs hello world app for testing purposes
* platform/ingress - nginx ingress controller

You can run this on your laptop (maybe -- if you have enough cores and ram). If you run it on your laptop, just run the provisioner script that is in the `infra/local` folder to locally install the tools you need. On a future update this will be done via packer because it's much cooler, stay tuned!!. 

The makefile in the root of this project can start the k3s server and install the ingress controller and recaplab app.

Once deployed locally, your services and apps will be available on http://localhost:30000 or https://localhost:30001 if you've configured tls for anything.
