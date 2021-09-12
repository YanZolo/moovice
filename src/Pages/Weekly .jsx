import React, { Component } from 'react';
import Card from '../Components/Card';
import moment from 'moment';



class Weekly extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            favorites: JSON.parse(localStorage.getItem('favorite')) || [],
            isInFavorite: false,
            componentmount: false
        }
    }
    componentDidMount() {
        this.setState({componentMount: true})
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().subtract(7, 'days').format('YYYY-MM-DD')}&primary_release_date.lte=${moment().format('YYYY-MM-DD')}&api_key=8c2c5c205a0ac5bb229fe92084e87cf4`)

            .then(result =>                 
                result.json())
            .then(res => {
                this.setState({ movies: res.results })
               
                console.log('moment',moment().format('YYYY-MM-DD'))
                console.log('moment - 7',moment().subtract(7, 'd').format('YYYY-MM-DD'))
            });
    }
componentWillUnmount() {
    this.setState({componentMount: false})
}





handleClick = (movieId) => {
    if(this.state.favorites.includes(movieId) === false){
        this.setState({favorites: [...this.state.favorites, movieId], isInFavorite: true})
        localStorage.setItem('favorites', JSON.stringify([...this.state.favorites, movieId]) )
    }else {
        this.setState({favorites: this.state.favorites.filter(id=> id !== movieId), isInFavorite: false})
    }
    console.log('movieId handle click', movieId);
}

   

    render() {
        // localStorage.clear()
        console.log('is in favorite',this.state.isInFavorite)
        
        
        console.log('state favorite', this.state.favorites)
        console.log('local storage', localStorage.getItem('favorites'))
        // const popularMovies = this.state.movies.filter((movie)=>{
        //     return movie.vote_average > 8 
        // })

        return (
            <div className='containerPopular'>
                {this.state.movies.map(movie => {
                    return (
                    <Card 
                    handleClickFavoriteBtn={()=>this.handleClick(movie.id)} 
                    poster_path={movie.poster_path} 
                    title={movie.title} 
                    release_date={movie.release_date} 
                    overview={movie.overview} 
                    isInFavorite={this.state.favorites.includes(movie.id)} 
                    componentMount={this.state.componentMount}
                    />)
                })}
            </div>
        );
    }
}

export default Weekly;