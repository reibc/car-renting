/*
  Warnings:

  - You are about to drop the `Bookings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cars` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarsDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rentals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tracking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookings" DROP CONSTRAINT "Bookings_carId_fkey";

-- DropForeignKey
ALTER TABLE "Bookings" DROP CONSTRAINT "Bookings_clientId_fkey";

-- DropForeignKey
ALTER TABLE "CarsDetails" DROP CONSTRAINT "CarsDetails_carId_fkey";

-- DropForeignKey
ALTER TABLE "Rentals" DROP CONSTRAINT "Rentals_carId_fkey";

-- DropForeignKey
ALTER TABLE "Rentals" DROP CONSTRAINT "Rentals_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Tracking" DROP CONSTRAINT "Tracking_rentalId_fkey";

-- DropTable
DROP TABLE "Bookings";

-- DropTable
DROP TABLE "Cars";

-- DropTable
DROP TABLE "CarsDetails";

-- DropTable
DROP TABLE "Clients";

-- DropTable
DROP TABLE "Rentals";

-- DropTable
DROP TABLE "Tracking";

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "VIN" TEXT NOT NULL,
    "Plate" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "isRented" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carsDetails" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "Color" TEXT NOT NULL,
    "Specifications" TEXT NOT NULL,
    "Completation" TEXT NOT NULL,
    "isFuel" BOOLEAN NOT NULL DEFAULT false,
    "capacityLevel" INTEGER NOT NULL,

    CONSTRAINT "CarsDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "IDNP" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rentals" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Rentals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tracking" (
    "id" SERIAL NOT NULL,
    "rentalId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "fuel" DOUBLE PRECISION NOT NULL,
    "coordinates" JSONB NOT NULL,

    CONSTRAINT "Tracking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarsDetails_carId_key" ON "carsDetails"("carId");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "Bookings_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "Bookings_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carsDetails" ADD CONSTRAINT "CarsDetails_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "Rentals_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "Rentals_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracking" ADD CONSTRAINT "Tracking_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "rentals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
