-- AlterTable
ALTER TABLE "rentals" RENAME CONSTRAINT "Rentals_pkey" TO "rentals_pkey";

-- RenameForeignKey
ALTER TABLE "rentals" RENAME CONSTRAINT "Rentals_carId_fkey" TO "rentals_carId_fkey";

-- RenameForeignKey
ALTER TABLE "rentals" RENAME CONSTRAINT "Rentals_clientId_fkey" TO "rentals_clientId_fkey";
