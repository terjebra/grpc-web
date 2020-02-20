import React from 'react';

export type GeoLocation = {
    latitude: number;
    longitude: number;
}

const useGelocation = () => {
    const [state, setState] = React.useState<GeoLocation | undefined>(undefined);

    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
                setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            });
        }
    }, []);

    return state;
}

export default useGelocation;