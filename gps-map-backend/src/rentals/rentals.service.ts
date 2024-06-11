import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { clientInformation, rentalInformation } from './rentals.dto';

@Injectable()
export class RentalsService {
    constructor(private prisma: PrismaService) {}

    getTimeLeft(id: number) {
        return this.prisma.rentals.findUnique({
            select: {
                startDate: true,
                endDate: true
            },
            where: {
                id: id
            }
        })
    }

    async createClient(user: clientInformation) {
        const { name, phoneNumber, IDNP } = user;
        try {
            const result = await this.prisma.clients.create({
                data: {
                    name: name,
                    phoneNumber: phoneNumber,
                    IDNP: IDNP,
                }
            })
            console.log('Client created:', result);
        } catch (error) {
            console.error('Error creating client:', error);
        }
    }

    async rentACar(information: rentalInformation) {
        const { clientId, carId, startDate } = information;
        try {
            const start = new Date(startDate)
            const result = await this.prisma.$transaction( async (prisma) => {
                const car = await prisma.cars.findUnique({
                    where: {id: carId},
                    select: {isRented: true}
                })
                if (car?.isRented){
                    throw new Error('Car is already rented');
                }

                // Create new rental
                const rentedCar = await prisma.rentals.create({
                    data: {
                        clientId: clientId,
                        carId: carId,
                        startDate: startDate,
                        endDate: new Date(start.getTime() + 1000 * 60 * 60 * 24),
                    }
                })
                await prisma.cars.update({
                    where: {id: carId},
                    data: {isRented: true}
                })
                return rentedCar;
            })
            console.log('Car rented:', result);
        } catch (error) {
            console.error('Error renting car:', error);
        }
    }
}
