/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'sample.v1';

/** The ISO 639-1 language code. */
export enum Sample {
CODE_UNSPECIFIED = 0,
CODE_EN = 1,
UNRECOGNIZED = -1,
}

export const SAMPLE_V1_PACKAGE_NAME = 'sample.v1';































// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
    // add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
      if (_m0.util.Long !== Long) {
        _m0.util.Long = Long as any;
        _m0.configure();
      }







