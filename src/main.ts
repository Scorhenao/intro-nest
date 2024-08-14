import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false}); // the abortOnError in false allow to return an error messsage
  await app.listen(3000);
}
bootstrap();
