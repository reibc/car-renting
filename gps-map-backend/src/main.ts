import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    // Enable CORS
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
        credentials: true,
    });

    // Swagger setup
    const config = new DocumentBuilder()
        .setTitle('Car rental shop API')
        .setDescription('Car rental shop API')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // Start the application
    await app.listen(5000);
}
bootstrap();
