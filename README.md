# TodoApp

## Requirements
* Docker
* NestJS
* Prisma
* React
* NX
* Yarn

## Setup
1. set env file
```
cp .env.sample .env
```
2. install packages
```
yarn --frozen-lockfile
```
3. Init docker
```
docker compose up -d
```
4. Run migrations
```
yarn db:migrate:run
```
5. Start API and UI server
```
yarn dev
```
6. open in browser http://localhost:4200/
7. Register you user.


## Optional
You can build and run API in docker using 
```
./scripts/build_api.sh
./scripts/run_api.sh
```
