import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
import { SampleServiceController, GreetRequest, GreetResponse, SampleServiceControllerMethods as GrpcServiceController } from 'libs/protos/generated/sample/v1/sample_service';
import { Controller } from '@nestjs/common';

@Controller()
@GrpcServiceController()
export class SampleGrpcController implements SampleServiceController {
  greet(request: GreetRequest, metadata?: Metadata): GreetResponse | Promise<GreetResponse> | Observable<GreetResponse> {
    //throw new Error('Hello - Method not implemented.');
    //let res: GreetRequest = {
    //  greeting: "hello";
    //};

    //let result: GreetResponse = {
    //  greeting: 'hello'
    //}
    //return result;

    return {
      greeting: "hello world"
    };
  }
}