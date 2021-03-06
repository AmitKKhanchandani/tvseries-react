import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const SeriesListItem = ({series}) =>{
    return (
        <li >
            <Link to={`${process.env.PUBLIC_URL}/series/${series.show.id}`}>
                {series.show.name}
            </Link>
        </li>
    )
}


const SeriesList = (props) => {
    return(
        
        <div>
            <ul className="series-list">
                {props.List.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;