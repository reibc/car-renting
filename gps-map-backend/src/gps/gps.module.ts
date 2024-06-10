import { Module } from '@nestjs/common';
import { GpsService } from './gps.service';
import { GpsController } from './gps.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers: [GpsController],
    providers: [GpsService, PrismaService],
})
export class GpsModule {}
