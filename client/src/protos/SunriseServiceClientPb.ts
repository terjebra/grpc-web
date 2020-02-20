/**
 * @fileoverview gRPC-Web generated client stub for sunrise
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  SunriseRequest,
  SunriseResponse} from './sunrise_pb';

export class SunriseClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetSunrise = new grpcWeb.AbstractClientBase.MethodInfo(
    SunriseResponse,
    (request: SunriseRequest) => {
      return request.serializeBinary();
    },
    SunriseResponse.deserializeBinary
  );

  getSunrise(
    request: SunriseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SunriseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/sunrise.Sunrise/GetSunrise',
      request,
      metadata || {},
      this.methodInfoGetSunrise,
      callback);
  }

}

