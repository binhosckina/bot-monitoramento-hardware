include .env

.PHONY: up

up:
	docker-compose up --build --force-recreate --renew-anon-volumes --remove-orphans -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f