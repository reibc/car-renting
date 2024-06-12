# Create postgres database using docker container
```docker run --name my_postgres_db -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres```

## Initialize prisma in the nestJs project
```npx prisma generate --schema ./src/prisma/schema.prisma```
=======
# Backup database

1) Backup current database:
`docker exec -t postgres_container pg_dump -U root -F c -b -v -f /tmp/backup.sql mydatabase`

2) Copy backup file to host:
`docker cp postgres_container:/tmp/backup.sql ./backup.sql`

3) Scale nginx to 3 workers and citus to 2
`docker-compose up --scale nginx=3 --scale citus_worker_1=2`

