# GPS Tracking car renting shop

## TODO list

* [X] Use nestJs to create the backend
* [X] Use Postgres and prisma to connect to the database
* [X] Implement CORS to ensure the server accepts only front-end requests coming from port `3000`
* [ ] Creat the following routes:
    - [X] '/cars' - get all the cars and their details
    - [X] '/cars/carId' - get all the data for a specific car
    - [X] '/cars/available' - get all the available cars
    - [X] '/gps/speed/rental' - returns the average speed for the car, based on the timestamps and car locations
    - [X] '/gps/coordinations/rental' - get the gps data for the current rentailId [last position is the current position]
    - [X] '/gps/coordinations/rental/update' - POSTs the car location
    - [ ] '/bookings' - get all the bookings
    - [ ] '/rentals' - get all the rentals   
* [ ] Update front-end with the data from all the routes
* [ ] Implement load balance for the server using nginx
* [ ] Implement load balance for the database using citus
* [ ] Authentication or token verification