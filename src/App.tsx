import React, { FunctionComponent, useState, useEffect } from 'react';
import Hike from './models/hike';
import HIKES from './models/mock-hike';

const App: FunctionComponent = () => {
    const [hikes, setHikes] = useState<Hike[]>([]);

    useEffect(() => {
        setHikes(HIKES);
    }, []);

    return (
        <div className='container px-4 py-5'>
            <h1 className='pb-2 border-bottom'>Adventures FE React BS</h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5'>
                {hikes.map(({ id, title, picture, created }) => (
                    <div className='col d-flex align-items-start'>
                        <div className='col-md-12' key={id}>
                            <div className='card'>
                                <img className='card-img-top' src={picture} alt={title} />
                                <div className='card-body'>
                                    <h5 class='card-title'>{title}</h5>
                                    <p className='card-text'>{created.toString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default App;