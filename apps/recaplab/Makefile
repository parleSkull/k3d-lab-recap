install: build release deploy test

build:
	docker build --tag parleskull/recaplab .

release:
	docker push parleskull/recaplab

deploy:
	kubectl -n recaplab apply -f ./k8s

delete:
	kubectl -n recaplab delete -f ./k8s

test:
	@curl -s http://localhost:8080; echo;
