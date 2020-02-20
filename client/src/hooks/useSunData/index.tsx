import React from 'react';
import * as grpcWeb from 'grpc-web';
import { SunriseClient } from '../../protos/SunriseServiceClientPb';
import { SunriseRequest, SunriseResponse } from '../../protos/sunrise_pb';

const echoService = new SunriseClient('https://localhost:5001', null, null);

export type SunData = {
    sunset: string;
    sunrise: string;
}

const useSunData = (latitude: number, longitude: number) => {
    const [state, setState] = React.useState<SunData | undefined>(undefined);

    let request = new SunriseRequest();

    request.setLatitude(latitude);
    request.setLongitude(longitude);

    const call = echoService.getSunrise(request, {},
        (err: grpcWeb.Error, response: SunriseResponse) => {
            if (!err) {
                setState({
                    sunrise: response.getSunrisetimestamp(),
                    sunset: response.getSunsettimestamp()
                });
            }
        });
    call.on('status', (status: grpcWeb.Status) => {

    });

    return state;
}

export default useSunData;