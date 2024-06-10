import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GpsService } from './gps.service';
import { calculateAverageSpeed } from './calculateAverageSpeed';
import { UpdateCoordinatesDto } from './gps.dto';

@Controller('gps')
export class GpsController {
    constructor(private readonly gpsService: GpsService) {}

    @Get('coordinates/speed/rental/:id')
    async getAverageSpeed(@Param('id') id: string){
        const carId = parseInt(id);
        const data = await this.gpsService.getCoordinates(carId);
        return parseFloat(calculateAverageSpeed(data).toFixed(2));
    }

    @Get('coordinates/rental/:id')
    getCoordinates(@Param('id') id: string) {
        const carId = parseInt(id);
        return this.gpsService.getCoordinates(carId);
    }

    @Post('coordinates/rental/update/')
    updateCoordinates(
        @Body() updateCoordinatesDto: UpdateCoordinatesDto) {
        return this.gpsService.updateCoordinates(updateCoordinatesDto);
    }

}
