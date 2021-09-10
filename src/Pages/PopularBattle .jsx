import React, { Component } from 'react';
import Card from '../Components/Card';


class PopularBattle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            currentBattle: 0,
            favorites: JSON.parse(localStorage.getItem('favorites')) || []
          
        }
    }

    componentDidMount() {
       
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8c2c5c205a0ac5bb229fe92084e87cf4')
            .then(result => result.json())
            .then(res => this.setState({ movies: res.results }))
    }



    handleClickFavorite = (idMovieClicked) => {
        this.setState({
            favorites: [...this.state.favorites, idMovieClicked ],
            currentBattle: this.state.currentBattle + 2
        });
        localStorage.setItem('favorites', JSON.stringify([...this.state.favorites, idMovieClicked ]))
    }


    render() {
        
        console.log(this.state.favorites, localStorage.getItem("favorites"));
        const currentBattle = this.state.currentBattle
        const duelMovie = this.state.movies.slice(currentBattle, currentBattle + 2)
        
        /*console.log('duelMovie:', duelMovie)
        console.log('local storage favorite', localStorage.getItem('favorites'))        
        console.log('local storage fav ids', localStorage.getItem('favIDs'))        
        console.log('favorites',this.state.favorites)      */  


        return (
            <div className='containerPopular' >

                {duelMovie.length >= 2 ?
                    duelMovie.map((movie) => (
                        <Card handleClickFavorite={() => this.handleClickFavorite(movie.id)} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} />
                    )) : <h1>Array is Empty</h1>
                }   






            </div>
        );
    }
}

export default PopularBattle;