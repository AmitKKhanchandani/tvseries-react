import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
        show:null,
        isFetching:true
    }

    componentDidMount(){

        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(response => response.json() )
            .then((json) =>{
                // console.log(json);
                this.setState({ show:json, isFetching:false });
        });
    }

    render() {
        // console.log(this.props);
        const { show, isFetching } = this.state;
        let summary ='';
        let id = '';
        let name = '';
        let ratings = '';
        let image = '';

        if(show !== null)
        {   
            if(show.summary !== null){
                summary = `
                        <p>Summary: ${show.summary}</p>
                        `;
            }
        
        id = `
                    Single Series - The Show ID is ${show.id}
                `;
        name = `
                ${show.name}
                `;
            if(show.rating !== null){
                if(show.rating.average !== null){
                    ratings = `
                                ${show.rating.average}
                        `;
                }
                else{
                    ratings = `
                                No Ratings Available
                        `;
                }
            }
        if(show.image !== null){
            image = `
                <img src=${show.image.medium} alt=${show.name} />
                    `;
            }
        
        }
        
        
        

        
        return (
            <div>
                {show === null && isFetching && <Loader/>}

                {
                    !isFetching && show !== null 
                    &&
                    <div>
                        <p>{id}</p>
                        <p>{name}</p>
                        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
                        <p>Ratings: {ratings}</p>
                        <p>Image:
                            <br/><br/><br/>
                            <p dangerouslySetInnerHTML={{ __html: image }}></p>
                        </p>
                    </div>
                }
                
                
            </div>
        );
    }
}

export default SingleSeries;