import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CarInformations } from './cars.dto';

@Injectable()
export class CarsService {
    constructor(private prisma: PrismaService) {}

    getCars() {
        return this.prisma.cars.findMany({
            include: {
                carsDetails: true,
            }
        });
    }

    getCarById(carId: number) {
        return this.prisma.cars.findUnique({
            where: {
                id: carId,
            },
            include: {
                carsDetails: true,
            }
        })
    }

    getAvailableCars() {
        return this.prisma.cars.findMany( {
            where: {
                isRented: {equals: false},
            },
            include: {
                carsDetails: true,
            }
        });
    }

    async createCar(carInformation: CarInformations) {
        const { carDetails, ...carData } = carInformation;
    
        try {
          // Create the car
            const createdCar = await this.prisma.cars.create({
                data: {...carData,
                },
            });

            if (carDetails) {
                try {
                await this.prisma.carsDetails.create({
                    data: {
                    ...carDetails,
                    carId: createdCar.id, 
                    },
                });
                console.log('Created Car Details:', carDetails);
                } catch (carDetailsError) {
                    console.error('Error creating car details:', carDetailsError);
                    // Handle car details creation error, e.g., rollback car creation or log the error
                    // Depending on your needs, you might want to delete the created car if car details creation fails
                    await this.prisma.cars.delete({ where: { id: createdCar.id } });
                    throw carDetailsError;
                }
            }
    
            return createdCar;
        } catch (error) {
            console.error('Error creating car:', error);
            throw error;
        }
      }
}
