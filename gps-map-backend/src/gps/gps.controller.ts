import { Controller, Get } from '@nestjs/common';
import { GpsService } from './gps.service';

@Controller('gps')
export class GpsController {
    constructor(private readonly gpsService: GpsService) {}

    @Get('coordinates')
    getCoordinates() {
        return this.gpsService.getCoordinates();
    }

    @Get('cars')
    getCards() {
        return this.gpsService.getCars();
    }
}
