import { Module } from '@nestjs/common';
import { SampleController } from './controller/sample.controller';
import { SampleService } from './service/sample.service';
import { SampleGrpcController } from './controller/sample.grpc.controller';

@Module({
  imports: [],
  controllers: [SampleController, SampleGrpcController],
  providers: [SampleService],
})
export class AppModule {}
