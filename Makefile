dcHome = docker-compose -f ./docker-compose.yml -f ./home/docker-compose.parent.yml
dcDo = docker-compose -f ./docker-compose.yml -f ./home/docker-compose.parent.yml
home-up:
	docker-compose $(dcHome) up
home-build:
	docker-compose $(dcHome) build

home-bup: home-build home-up
