/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Code } from '../../sample/v1/code';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'sample.v1';

export interface GreetRequest {
/** The name of the thing or person to greet. */
name: string,
/** Denotes which language to use for the greeting. */
language: Code,
}

export interface GreetResponse {
/** The full greeting. */
greeting: string,
}

export const SAMPLE_V1_PACKAGE_NAME = 'sample.v1';

export interface SampleServiceClient {

greet(
        request: GreetRequest,metadata?: Metadata
      ): Observable<GreetResponse>;

}

export interface SampleServiceController {

greet(request: GreetRequest, metadata?: Metadata): 
        Promise<GreetResponse>
        | Observable<GreetResponse>
        | GreetResponse
      ;

}

export function SampleServiceControllerMethods() {
      return function(constructor: Function) {
        const grpcMethods: string[] = ["greet"];
        for (const method of grpcMethods) {
          const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
          GrpcMethod('SampleService', method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods: string[] = [];
        for (const method of grpcStreamMethods) {
          const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
          GrpcStreamMethod('SampleService', method)(constructor.prototype[method], method, descriptor);
        }
      };
    }

export const SAMPLE_SERVICE_NAME = "SampleService";































// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
    // add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
      if (_m0.util.Long !== Long) {
        _m0.util.Long = Long as any;
        _m0.configure();
      }







