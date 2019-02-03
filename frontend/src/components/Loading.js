import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';

const Loading = () => {
    return (
        <div className='loading-container'>
            <div>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            </div>
        </div>
    )
}

export default Loading;