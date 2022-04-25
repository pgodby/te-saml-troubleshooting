# Docker Help
If you are unfamiliar with Docker, the following tips will help you work with the containers during the lab exercises.

## Tips
Use the following command to restart the specified container:
```
docker restart <container_name>
```
---
If you need to use an interactive shell, use the following command to open a terminal in the specified container:
```
docker exec -it <container_name> sh
```
To leave the interactive shell, type:
```
exit
```

---
If you are finished with the lab exercises and want to clean up the lab environment (or start over), use the following commands to manage the Docker images and containers.
```
# kill all running containers
docker kill $(docker ps -q)

# delete all containers
docker rm -vf $(docker ps -a -q)

# delete all images
docker rmi -f $(docker images -a -q)
```

---
**Labs Exercises:** [1](Lab1.md) | [2](Lab2.md) | Help