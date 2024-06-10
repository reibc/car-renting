import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
                isRented: {equals: true},
            },
            include: {
                carsDetails: true,
            }
        });
    }
}
