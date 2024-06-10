import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the import path as needed

@Module({
    imports: [PrismaModule],
    controllers: [CarsController],
    providers: [CarsService],
})
export class CarsModule {}
