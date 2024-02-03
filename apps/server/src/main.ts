import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const trpc = app.get(TrpcRouter);
  app.enableCors();
  trpc.applyMiddleware(app);
  await app.listen(process.env.PORT || 4000);
}
bootstrap(); 
