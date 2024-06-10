# Create postgres database using docker container
```docker run --name my_postgres_db -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres```

## Initialize prisma in the nestJs project
```npx prisma generate --schema ./src/prisma/schema.prisma```
