import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { GreetRequest, GreetResponse, SampleServiceController } from '@tournament/proto/sample/v1/sample_service';

@GrpcService()
class SampleService implements SampleServiceController {
  greet(request: GreetRequest, metadata?: Metadata): GreetResponse | Promise<GreetResponse> | Observable<GreetResponse> {
    throw new Error('Method not implemented.');
  }
}