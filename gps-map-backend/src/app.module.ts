import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GpsModule } from './gps/gps.module';
import { CarsModule } from './cars/cars.module';

@Module({
    imports: [GpsModule, CarsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
