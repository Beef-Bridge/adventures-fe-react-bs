import React, { FunctionComponent, useState, useEffect } from 'react';
import Hike from './models/hike';
import HIKES from './models/mock-hike';

const App: FunctionComponent = () => {
    const [hikes, setHikes] = useState<Hike[]>([]);

    useEffect(() => {
        setHikes(HIKES);
    }, []);

    return (
        <div>
            <h1>Adventures FE React BS</h1>
            <p>Il y a {hikes.length} randonnées dans l'application.</p>
        </div>
    )
}

export default App;