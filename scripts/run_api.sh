#/usr/bin/bash
docker run -it --env-file=.env --network=host todo-api:latest
