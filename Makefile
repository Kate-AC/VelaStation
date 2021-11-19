.PHONY: empty
empty:

.PHONY: run
run:
	docker-compose up

.PHONY: build
build:
	docker-compose build --no-cache

.PHONY: bash
bash:
	docker-compose exec app bash
