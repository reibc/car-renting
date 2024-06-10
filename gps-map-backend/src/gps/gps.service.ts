import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateCoordinatesDto } from './gps.dto';

@Injectable()
export class GpsService {
    constructor(private prisma: PrismaService) {}

    getCoordinates(id: number) {
        return this.prisma.tracking.findMany({
            where: { rentalId: id },
            select: {
                timestamp: true,
                coordinates: true,
            }
        })
    }

    updateCoordinates(updateCoordinatesDto: UpdateCoordinatesDto) {
        return this.prisma.tracking.create({
            data: {
                rentalId: updateCoordinatesDto.rentalId,
                timestamp: updateCoordinatesDto.timestamp,
                fuel: updateCoordinatesDto.fuel,
                coordinates: updateCoordinatesDto.coordinates,
            },
        });
    }
}
