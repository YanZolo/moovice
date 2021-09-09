import React, { Component } from 'react';
import Card from '../Components/Card';



class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8c2c5c205a0ac5bb229fe92084e87cf4')

            .then(result =>                 
                result.json())
            .then(res => {
                this.setState({ movies: res.results })
               
            });
    }


   

    render() {
        console.log('movies', this.state.movies)
        // const popularMovies = this.state.movies.filter((movie)=>{
        //     return movie.vote_average > 8 
        // })

        return (
            <div className='containerPopular'>
                {this.state.movies.map(movie => {
                    return <Card handleClickFavorite={this.handleClickFavorite} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} />
                })}
            </div>
        );
    }
}

export default Popular;