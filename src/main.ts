import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
const app = await NestFactory. create(AppModule);

// ajusta o fuso horario do BD
process.env. TZ = '-03:00'

// aplica os recursos de validação
app. useGlobalPipes(new ValidationPipe());


app. enableCors();

// porta que sera usada
await app.listen(4000);

}
bootstrap();