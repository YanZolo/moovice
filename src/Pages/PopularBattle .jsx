import React, { Component } from 'react';
import Card from '../Components/Card';


class PopularBattle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            currentBattle: 0,
          
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8c2c5c205a0ac5bb229fe92084e87cf4')
            .then(result => result.json())
            .then(res => this.setState({ movies: res.results }))
    }


    handleClickFavorite = (movieClicked, index) => {

        const IdFavoriteMovie = this.state.movies.filter(elem => (
            elem.id === movieClicked.id
        ))
        console.log('IdFavoriteMovie', IdFavoriteMovie[0].id)

        localStorage.setItem('favorite', JSON.stringify(IdFavoriteMovie[0].id))

        this.setState({ currentBattle: this.state.currentBattle + 2})

    }


    render() {

        const currentBattle = this.state.currentBattle
        const duelMovie = this.state.movies.slice(currentBattle, currentBattle + 2)
        
        console.log('duelMovie:', duelMovie)
        console.log('local storage', localStorage.getItem('favorite'))        


        return (
            <div className='containerPopular' >

                {duelMovie.length >= 2 ?
                    duelMovie.map((movie, index) => (
                        <Card handleClickFavorite={() => this.handleClickFavorite(movie, index)} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} />
                    )) : <h1>Array is Empty</h1>
                }






            </div>
        );
    }
}

export default PopularBattle;