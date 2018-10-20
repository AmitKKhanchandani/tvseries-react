import React from 'react';
import loaderSrc from '../../assets/loader.gif'
const Loader = props => {
    return(
        <div>
            <img src={loaderSrc} alt="loader icon"/>
        </div>
    )
}

export default Loader;