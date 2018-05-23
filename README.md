# Home Docker File

This README.md file resides in the `./web/docker` directory note below.

```
web ---- docker ---- home
     |           |
     |           |-- do
     |
     |-- mounts ---- home ---- home1
     |           |         |
     |           |         |-- home2
     |           |  
     |           |-- do --
     |
     |-- tools
```

The `./web/docker` directory:

* is a single git repository,
* contains docker files and,
* contains web server files.

The `./web/mounts` directory:

* contains multiple git repositories,

The `./web/tools` directory:

* Contains tools that are not in a repository and are rsync'ed to the `mounts`
  and the `docker` directory.
* The `docker` directory contains _HARD_ links to the caddy web server stored
  in the tools directory.

The `./web/docker` and `./web/mounts` separate because:

* Digital Ocean had an issues auto restarting docker containers on reboot from
  a mounted drive.
* The DO issue is resolved when the docker files is on the booting host.
* A mounted file system was used on DO so that switching droplets would involve
  less work (clone the `./web/docker` repository and mount a drive containing
  `./web/mounts`).

The docker file can point to `home1` while new code is developed in `home2` and
when development is done in `home2` the docker file can point to the new home.

In the `./web/docker/home` use the following command to start up a home server.

```
docker-compose -f docker-compose.yml -f home/docker-compose.parent.yml up
```

The home setup has the home web sites and the digital ocean web site.
