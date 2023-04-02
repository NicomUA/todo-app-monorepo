#/usr/bin/bash
docker build -t todo-api:latest -f ./Dockerfile .
docker run -it --env-file=.env --network=host todo-api:latest
