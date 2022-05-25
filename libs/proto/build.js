#!/usr/bin/env node

const promisify = require('util').promisify;
const exec = promisify(require('child_process').exec);

//buf generate --template proto/buf.gen.yaml buf.build/googleapis/googleapis
//buf generate --template proto/buf.gen.yaml proto --debug --verbose

const buf = { build: 'buf' };

const compile = [
    buf.build,
    'generate',
    '--template ./buf.gen.yaml'
].join(' ');

//Warning: Duplicate generated file name "com/language/v1/language.ts". Buf will continue without error here and drop the second occurrence of this file, but please raise an issue with the maintainer of the plugin.
//Warning: Duplicate generated file name "typeRegistry.ts". Buf will continue without error here and drop the second occurrence of this file, but please raise an issue with the maintainer of the plugin.