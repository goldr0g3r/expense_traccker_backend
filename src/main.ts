import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config, Environment } from './environment';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // environment
  const env = app.get(ConfigService).get<Environment>(Config);

  // cookie
  app.use(cookieParser(env.cookie_secret));

  // use global validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        excludeExtraneousValues: true,
        exposeDefaultValues: true,
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger Setup
  const SwaggerOptions = new DocumentBuilder()
    .setTitle('An Expense Tracker application')
    .setVersion('1.0.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, SwaggerOptions);
  SwaggerModule.setup('api-docs', app, swaggerDocument);
  await app.listen(env.port);
}
bootstrap();
