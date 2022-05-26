import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

/*
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
/*/
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3009',
      package: ['sample.v1'],
      protoPath: [join(__dirname, 'protos/sample/v1/sample_service.proto')],
      //protoPath: [join(cwd(), 'src', 'protos/sample/v1/sample_service.proto')],
      loader : {
        keepCase: false,
        includeDirs: [join(__dirname, 'protos')]
      }
    }
  });

  await app.listen();
}
bootstrap();
//*/