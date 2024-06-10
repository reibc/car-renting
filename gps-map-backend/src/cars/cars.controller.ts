import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get()
    getCars() {
        return this.carsService.getCars();
    }

    @Get('available')
    getAvailableCars() {
        return this.carsService.getAvailableCars();
    }
    
    @Get(':id')
    getCarById(@Param('id') id: string) {
        return this.carsService.getCarById(parseInt(id));
    }

}
