import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GpsModule } from './gps/gps.module';
import { CarsModule } from './cars/cars.module';
import rateLimit from 'express-rate-limit'; // Modificarea aici

@Module({
    imports: [GpsModule, CarsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // Limit to 100 requests per hour per IP address
        consumer.apply(rateLimit({
            windowMs: 60 * 60 * 1000, // 1 hour
            max: 100, // request limit
            message: 'Too many requests from this IP address, try again later.'
        }) as any).forRoutes('*'); // Applying the restriction to all routes
    }
}

