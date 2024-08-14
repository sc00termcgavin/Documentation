Need to create a deployment script on pi

```
#!/bin/bash
docker pull sc00termcgavin/docusaurus-app:latest
docker-compose down
docker-compose up -d
```

Schedule with Cron
```
crontab -e
```


Add a line to run the script periodically (e.g., every hour):
```
0 * * * * /path/to/update.sh
```