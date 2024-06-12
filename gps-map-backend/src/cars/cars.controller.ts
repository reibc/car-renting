import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CarsService } from './cars.service';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';
import { CarInformations } from './cars.dto';

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
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.getCarById(id);
    }

    @Post('create')
    @UseGuards(JwtAuthGuard)
    createCar(@Body() carInformation: CarInformations) {
        return this.carsService.createCar(carInformation);
    }

}
