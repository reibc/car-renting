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
        // Limitare la 100 de cereri pe oră pentru fiecare adresă IP
        consumer.apply(rateLimit({
            windowMs: 60 * 60 * 1000, // 1 oră
            max: 100, // limita de cereri
            message: 'Prea multe cereri de la această adresă IP, încearcă mai târziu.'
        }) as any).forRoutes('*'); // Aplicarea limitării la toate rutele
    }
}

