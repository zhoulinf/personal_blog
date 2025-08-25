import {NestFactory, Reflector} from '@nestjs/core';
import {AppModule} from './app.module';
import {JwtAuthGuard} from './modules/auth/auth.guard';
import {LOGGER_TOKEN} from './logger/logger.module';
import {setupSwagger} from './swagger/swagger.config';
import {ResponseInterceptor} from './common/interceptor/response.interceptor';
import {AllExceptionFilter} from './common/filter/all-exception.filter';
import {ClassSerializerInterceptor, ValidationPipe} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(app.get(JwtAuthGuard));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(app.get(AllExceptionFilter));
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  app.useLogger(app.get(LOGGER_TOKEN));
  app.enableCors();
  setupSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
