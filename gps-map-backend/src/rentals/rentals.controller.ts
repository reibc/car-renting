import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { calculateTimeLeft } from './calculateTimeLeft'
import { JwtAuthGuard } from 'auth/jwt-auth.guard';
import { clientInformation, rentalInformation } from './rentals.dto';


@Controller('rentals')
export class RentalsController {
    constructor(private readonly rentalsService: RentalsService) {}
    @Get(':id')
    async getTimeLeft(@Param('id', ParseIntPipe) id: number){
        return {'timeLeft': calculateTimeLeft((await this.rentalsService.getTimeLeft(id)).endDate)}
    }

    @Post('create/client')
    @UseGuards(JwtAuthGuard)
    createClient(@Body() clientInformation: clientInformation) {
        return this.rentalsService.createClient(clientInformation);
    }

    @Post('create/rental')
    @UseGuards(JwtAuthGuard)
    createCar(@Body() rentalInformation: rentalInformation) {
        return this.rentalsService.rentACar(rentalInformation);
    }
}
