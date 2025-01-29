# purge all Docker images
#
docker rmi -f $(docker images -a -q)