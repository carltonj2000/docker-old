dcHome = -f ./docker-compose.home.yml
dcDo = -f ./do/docker-compose.parent.yml

home-up:
	docker-compose $(dcHome) up
home-build:
	docker-compose $(dcHome) build

home-bup: home-build home-up
