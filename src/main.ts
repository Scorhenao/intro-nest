import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false}); // the abortOnError in false allow to return an error messsage
  app.setGlobalPrefix('api'); // the global enpoint to escificate the api rest
  await app.listen(3000);
}
bootstrap();
