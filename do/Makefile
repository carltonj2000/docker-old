dcBase = -f docker-compose.yml
dcWedding = -f tinaandcarlton3wedding/docker-compose.parent.yml
dcWeddingInvite = -f tinaandcarlton2weddinginvite/docker-compose.parent.yml

build:
	docker-compose $(dcBase) $(dcWedding) $(dcWeddingInvite) build

up:
	docker-compose $(dcBase) $(dcWedding) $(dcWeddingInvite) up

bup: build up

# using the commands below requires commenting the depends_on in the root
# docker-compose.yml

build-one:
	docker-compose $(dcBase) build

up-one:
	docker-compose $(dcBase) up

bup: build-one up-one

build-wedding-invite:
	docker-compose $(dcBase) $(dcWeddingInvite) build

up-wedding-invite:
	docker-compose $(dcBase) $(dcWeddingInvite) up

bup-wedding-invite: build-wedding-invite up-wedding-invite

build-wedding:
	docker-compose $(dcBase) $(dcWedding) build

up-wedding-invite:
	docker-compose $(dcBase) $(dcWedding) up

bup-wedding: build-wedding up-wedding
