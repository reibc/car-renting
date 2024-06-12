import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GpsService } from './gps.service';
import { getRideDetails } from './getRideDetails'
import { UpdateCoordinatesDto } from './gps.dto';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';

@Controller('gps')
export class GpsController {
    constructor(private readonly gpsService: GpsService) {}

    @Get('details/rental/:id')
    async details(@Param('id') id: string){
        const carId = parseInt(id);
        const data = await this.gpsService.getCoordinates(carId);
        return getRideDetails(data);
    }

    @Get('coordinates/rental/:id')
    getCoordinates(@Param('id') id: string) {
        const carId = parseInt(id);
        return this.gpsService.getCoordinates(carId);
    }
    
    @Post('coordinates/rental/update/')
    @UseGuards(JwtAuthGuard)
    updateCoordinates(
        @Body() updateCoordinatesDto: UpdateCoordinatesDto) {
        return this.gpsService.updateCoordinates(updateCoordinatesDto);
    }

}
