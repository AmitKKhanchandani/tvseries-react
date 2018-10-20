import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }
    
    componentDidMount(){
    // const series =["Iron Man", "Iron man2"];

    // setTimeout(() => {
    //   this.setState({series})
    // }, 2000);

    // fetch('http://api.tvmaze.com/search/shows?q=iron')
    //     .then(response => response.json() )
    //     .then((json) =>{
    //         console.log(json);
    //         this.setState({series:json})
    //     })

    }

    onSeriesInputChange = e =>{

        this.setState({ seriesName: e.target.value, isFetching:true })
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json() )
            .then((json) =>{
                // console.log(json);
                this.setState({series:json, isFetching:false})
        })

        // console.log(e);
        // console.log(e.target.value);
    }

    render() {
        const {series, seriesName, isFetching} = this.state;
        return (
            <div className="row">
            
                <Intro message="Here you can find all your loved series" />
                <br/>
                {/* The Length of Series array  = {this.state.series.length} */}
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
                </div>

                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No Results Found</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList List={this.state.series} />
                }
                
            </div>
        )
    }
}

export default Series;