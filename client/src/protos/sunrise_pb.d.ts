import * as jspb from "google-protobuf"

export class SunriseRequest extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SunriseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SunriseRequest): SunriseRequest.AsObject;
  static serializeBinaryToWriter(message: SunriseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SunriseRequest;
  static deserializeBinaryFromReader(message: SunriseRequest, reader: jspb.BinaryReader): SunriseRequest;
}

export namespace SunriseRequest {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class SunriseResponse extends jspb.Message {
  getSunsettimestamp(): string;
  setSunsettimestamp(value: string): void;

  getSunrisetimestamp(): string;
  setSunrisetimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SunriseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SunriseResponse): SunriseResponse.AsObject;
  static serializeBinaryToWriter(message: SunriseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SunriseResponse;
  static deserializeBinaryFromReader(message: SunriseResponse, reader: jspb.BinaryReader): SunriseResponse;
}

export namespace SunriseResponse {
  export type AsObject = {
    sunsettimestamp: string,
    sunrisetimestamp: string,
  }
}

