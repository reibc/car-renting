import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { GpsModule } from './gps/gps.module';
import { CarsModule } from './cars/cars.module';
import { RentalsModule } from './rentals/rentals.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import rateLimit from 'express-rate-limit';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    GpsModule,
    CarsModule,
    RentalsModule,
  ],
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

