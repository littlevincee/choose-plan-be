-- create db
npx sequelize-cli db:create

-- run migration
npx sequelize-cli db:migrate

-- seed database
npx sequelize-cli db:seed:all

image:
docker build  -t choose-plan-backend-service:master .

run:
docker-compose up -d
