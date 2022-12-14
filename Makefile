web-cli:
	docker-compose run --rm -i shell-web sh

api:
	docker-compose up shell-backend -d

api-cli:
	docker-compose run --rm -i shell-backend sh

db-cli:
	docker-compose run --rm -i mongo sh

logs:
	docker-compose logs -f

down:
	docker-compose down
