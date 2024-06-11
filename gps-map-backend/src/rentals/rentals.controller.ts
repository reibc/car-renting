import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { calculateTimeLeft } from './calculateTimeLeft'


@Controller('rentals')
export class RentalsController {
    constructor(private readonly rentalsService: RentalsService) {}
    @Get(':id')
    async getTimeLeft(@Param('id', ParseIntPipe) id: number){
        return {'timeLeft': calculateTimeLeft((await this.rentalsService.getTimeLeft(id)).endDate)}
    }
}
