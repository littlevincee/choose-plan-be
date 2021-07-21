# Getting Started

Quick start instruction to run Choose Plan Backend


## Local Env

### `npm install`

To install dependencies

### `npm run dev`

To start local development mode
It will start express server in [http://localhost:9000]

## Database start-up

If MySQL isn't running you can use docker to host it

### `docker-compose -f docker-compose.dev.yml up -d`

This will spin up MySQL in docker

## Database init

Execute the following commands in sequence:
1. `npx sequelize-cli db:create` This will create a db called `ChoosePlans`
2. `npx sequelize-cli db:migrate` This will setup all tables in `ChoosePlans`
3. `npx sequelize-cli db:seed:all` This will populate all the tables with data