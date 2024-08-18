---
title: Wildcard Certificates with Traefik 
sidebar_position: 3
---

---

## Goals

- No more self signed certs.
- Dont have to remember ports numbers.
- Secure certificates with the ability to assign DNS names rather than use IP's.
- Uses Lets Encrypt for free certificates via the DNS challange that auto renew every 90 days. 
- Use cloudflare to verify the domain. 
- Name the local DNS services using pihole. 
- Certificates auto renew every 90 days.
- Docker container uses traefik proxy to get certificates by verifyiung with cloudflare that the domain is properly owned. service then asks cloudflare through traefik for certificates.
- User requests the local site.
- Pihole local DNS resolves to the traefik proxy.
- Traefik proxy routes to local services.


## Structure 

```jsx title="structure"
./traefik
├── data
│   ├── acme.json
│   ├── config.yml
│   └── traefik.yml
└── cf_api_token.txt
└── docker-compose.yml
```

## Docker Compose Contents

```jsx title="docker-compose.yaml"

version: "3.8"

services:
  traefik:
    image: traefik:v3.0
    container_name: traefik
    restart: unless-stopped
    security_opt:
      - no-new-privileges:true
    networks:
      - proxy
    ports:
      - 80:80
      - 443:443
      # - 443:443/tcp # Uncomment if you want HTTP3
      # - 443:443/udp # Uncomment if you want HTTP3
    environment:
      CF_DNS_API_TOKEN_FILE: /run/secrets/cf_api_token # note using _FILE for docker secrets
      # CF_DNS_API_TOKEN: ${CF_DNS_API_TOKEN} # if using .env
      TRAEFIK_DASHBOARD_CREDENTIALS: ${TRAEFIK_DASHBOARD_CREDENTIALS}
    secrets:
      - cf_api_token
    env_file: .env # use .env
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./data/traefik.yml:/traefik.yml:ro
      - ./data/acme.json:/acme.json           # JSON representation of the certificate 
      # - ./data/config.yml:/config.yml:ro      # Uncomment once config files created 
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.traefik.entrypoints=http"
    # Route Rule to expose the dashboard to the Sub-Sub Domain
      - "traefik.http.routers.traefik.rule=Host(`traefik-dashboard.local.domain.net`)"  
    # Pass in Auth credentials     
      - "traefik.http.middlewares.traefik-auth.basicauth.users=${TRAEFIK_DASHBOARD_CREDENTIALS}"  
    # Redirect HTTP to HTTPS    
      - "traefik.http.middlewares.traefik-https-redirect.redirectscheme.scheme=https"    
    # Custom Headers            
      - "traefik.http.middlewares.sslheader.headers.customrequestheaders.X-Forwarded-Proto=https"   
    # Redirect Middleware
      - "traefik.http.routers.traefik.middlewares=traefik-https-redirect"     
    # Creating entry point called HTTPS to define below                        
      - "traefik.http.routers.traefik-secure.entrypoints=https"                                      
      - "traefik.http.routers.traefik-secure.rule=Host(`traefik-dashboard.local.domain.net`)"
    # Middleware for authentication on the endpoint for a dashboard
      - "traefik.http.routers.traefik-secure.middlewares=traefik-auth"                                
      - "traefik.http.routers.traefik-secure.tls=true"
    # Certificate Provide - Cloudflare
      - "traefik.http.routers.traefik-secure.tls.certresolver=cloudflare"     
    # Top Level: local.                       
      - "traefik.http.routers.traefik-secure.tls.domains[0].main=local.domain.net"      
    # Certificate applies to anything lower than .local subdomain   
      - "traefik.http.routers.traefik-secure.tls.domains[0].sans=*.local.domain.net"   
    # Allow Traefik to access internal API's  
      - "traefik.http.routers.traefik-secure.service=api@internal"                                  

secrets:
  cf_api_token:
    file: ./cf_api_token.txt

networks:
  proxy:
    external: true
```

### To DO's according to the volumes defined in the docker-compose file 

- [ ] Create a data folder 
  - [ ] Inside put a `traefik.yml` file 
    - [ ] After `config.yml` is created, mount the config volume in `docker-compose.yaml`
  - [ ] Create an ACME JSON file 
    - [ ] Assign permissions to it: `chmod 600 acme.json`
- [ ] Create secret for Cloudflare API token
- [ ] Generate docker proxy network
- [ ] Generate auth credentials to get to the dashboard
- [ ] Create `config.yml` file in the data folder

### Create Data Folder

> Traefik uses yml extension

```jsx title=""
mkdir data
cd data
touch acme.json
chmod 600 acme.json
touch traefik.yml
```

## `traefik.yml` [Static Configuration](https://doc.traefik.io/traefik/getting-started/configuration-overview/#the-static-configuration)

```jsx title="traefik.yml"
api:
  dashboard: true
  debug: true      # Logs, disable once working
entryPoints:
  http: 
    address: ":80"         # Create HTTP entrypoint on port 80
    http: 
      redirections:        # Go to https if on http (i.e. Redirect 80 to 443)
        entryPoint:
          to: https        # The target element
          scheme: https    # The redirection target scheme
  https:
    address: ":443"        # Create HTTPS entrypoint on port 443
serversTransport:
  insecureSkipVerify: true # Allow for self signed certificates behind traefik
providers:
  docker:
    endpoint: "unix:///var/run/docker.sock" # Listen to the UNIX Docker socket
    exposedByDefault: false # Expose container only explicitly enabled (using label traefik.enabled)
  # file:
  #   filename: /config.yml
certificatesResolvers:
  cloudflare:
    acme:
      email: cloudflare.email@email.me
      storage: acme.json
      # Production Acme Endpoints have rate limiting
      # caServer: https://acme-v02.api.letsencrypt.org/directory # prod (default)
      caServer: https://acme-staging-v02.api.letsencrypt.org/directory # staging
      dnsChallenge:
        provider: cloudflare
        #disablePropagationCheck: true # uncomment this if you have issues pulling certificates through cloudflare, By setting this flag to true disables the need to wait for the propagation of the TXT record to all authoritative name servers.
        #delayBeforeCheck: 60s # uncomment along with disablePropagationCheck if needed to ensure the TXT record is ready before verification is attempted 
        resolvers:
          - "1.1.1.1:53"
          - "1.0.0.1:53"
```


## Create Docker Network and Cloudflare API Secret Token

```jsx title=""
docker network create proxy
touch cf_api_token.txt
touch .env
```


```jsx title="In Cloudflare"
Docker Traefik API Token
├── For your cloudflare@email.com
│   ├── For your domain
│       ├── Zone: Read
│       └── DNS: Edit
└── Can Set Public Static IP's here if available
```

- Paste Cloudflare API token into `cf_api_token.txt`
- Install *htpasswd* with `$ sudo apt install apache2-utils`
  - Generate Credential Pair  `$ echo $(htpasswd -nB user) | sed -e s/\\$/\\$\\$/g` and Paste into `.env` to the assigned variable defined in docker-compose
    - `TRAEFIK_DASHBOARD_CREDENTIALS=user:$$2y$$Base64EncodedPassword`
  - Start the stack: `docker compose up -d --force-recreate`

## Starting the Stack

```jsx title=""
docker compose up -d --force-recreate
```

## Debugging

```jsx title=""
docker ps
docker logs traefik
docker exec -it traefik /bin/sh
```

### Troubleshooting Inside of the docker Container

```jsx title="Shell Inside of the container"
top
ls
cat acme.json
cat traefik.yml
ls /run/secrets
cat /run/secrets/cf_api_token
echo ${CF_DNS_API_TOKEN_FILE}
echo ${TRAEFIK_DASHBOARD_CREDENTIALS}
```

### DNS lookup test 

```jsx title="dns"
nslookup traefik-dashboard.local.example.com
```
:::tip
Add CNAME records for local.service.domain -> server hostname in Pihole
:::
:::info
Clear acme.json contents when swapping the caServer from Staging to Production
:::


## `Config.yml` [Dynamic Configuration](https://doc.traefik.io/traefik/getting-started/configuration-overview/#the-dynamic-configuration)


```jsx title="config.yml"
http:
 # region routers
 # Defined HTTP routers that handle incoming requests/route to the appropriate service 
  routers:
    pihole:
      entryPoints:
        - "https"
      rule: "Host(`pihole.local.surveillancelabs.net`)"
      middlewares:
        - redirectregex-pihole # Middleware to handle regex-based redirects for pihole
        - default-headers      # Apply default security headers
        - addprefix-pihole     # Add a prefix to the request path for pihole
        - https-redirectscheme # Redirect HTTP traffic to HTTPS
      tls: {}                  # Enable TLS (HTTPS) for this router
      service: pihole          # Define the backend service to route the request to

#endregion
#region services that routers will forward requests to
  services:
    pihole:
      loadBalancer:
        servers:
          - url: "http://192.168.69.69:80"  # Server URL for service
        passHostHeader: true    # Pass original host header to backend service
  
#endregion
  middlewares:
    addprefix-pihole:
      addPrefix:
        prefix: "/admin"
    https-redirectscheme:
      redirectScheme:
        scheme: https
        permanent: true      # Use a permanent (301) redirect
    redirectregex-pihole:
      redirectRegex:
        regex: "/admin/(.*)" # Match the request path starting with "/admin/"
        replacement: /

    default-headers:
      headers:
        frameDeny: true            # Prevent clickjacking by not allowing the site to be framed
        browserXssFilter: true     # Enable the XSS filter in the browser
        contentTypeNosniff: true   # Prevent MIME type sniffing
        forceSTSHeader: true       # Force the use of the Strict-Transport-Security header
        stsIncludeSubdomains: true # Apply HSTS to all subdomains
        stsPreload: true           # Preload the HSTS configuration in browsers
        stsSeconds: 15552000       # Set the max age for HSTS (6 months)
        customFrameOptionsValue: SAMEORIGIN   # Allow framing from the same origin only
        customRequestHeaders:
          X-Forwarded-Proto: https            # Forward the original request protocol (HTTP/HTTPS)

    default-whitelist:
      ipAllowList:
        sourceRange:
        # Trust reverse proxies in these local domains. Reduce to your subnet
        - "10.0.0.0/8"
        - "192.168.0.0/16"
        - "172.16.0.0/12"

    secured:
      chain:
        middlewares:
        - default-whitelist
        - default-headers
```

[img](./img/cert.png)