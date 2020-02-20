import React from 'react';
import './Sun.css';
import useSunData, { SunData } from './hooks/useSunData';


type State = {
    sunrise: string;
    sunset: string;
}

type Props = {
    latitude: number;
    longitude: number;
}


const Sun = (props: Props) => {
    const [state, setState] = React.useState<State | undefined>(undefined);
    const sunData: SunData | undefined = useSunData(props.latitude, props.longitude);

    React.useEffect(() => {
        if (sunData) {
            const formatter = new Intl.DateTimeFormat('default', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            });
            setState({
                sunrise: formatter.format(Date.parse(sunData.sunrise)),
                sunset: formatter.format(Date.parse(sunData.sunset))
            })
        }
    }, [sunData]);

    return (

        <div className="grid">
            <div className="info">
                Sunrise and sunset today
            </div>
            <div className={`box sundata`}>
                {state &&
                    (<div className="content">
                        <div className="row">
                            <div className="title">Sunrise</div>
                            <div className="time">{state.sunrise}</div>
                        </div>

                        <div className="row">
                            <div className="title">Sunset</div>
                            <div className="time">{state.sunset}</div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default Sun;
