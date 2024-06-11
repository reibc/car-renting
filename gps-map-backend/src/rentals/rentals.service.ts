import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

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
}
