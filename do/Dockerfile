FROM ubuntu:18.04
EXPOSE 8080

COPY caddy /usr/bin/caddy
COPY Caddyfile /etc/Caddyfile

RUN mkdir -p /html
WORKDIR /html

ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]

