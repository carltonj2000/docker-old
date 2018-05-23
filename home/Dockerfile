FROM ubuntu:16.04

RUN apt update && apt upgrade -y
EXPOSE 8080

COPY caddy /usr/bin/caddy
COPY Caddyfile /etc/Caddyfile

RUN mkdir -p /html
WORKDIR /html

ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]
