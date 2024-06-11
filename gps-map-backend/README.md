# Backup database

1) Backup current database:
`docker exec -t postgres_container pg_dump -U root -F c -b -v -f /tmp/backup.sql mydatabase`

2) Copy backup file to host:
`docker cp postgres_container:/tmp/backup.sql ./backup.sql`