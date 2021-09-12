import React, { Component } from 'react';
import Card from '../Components/Card';
import moment from 'moment';


class WeeklyBattle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0,
            favorites: JSON.parse(localStorage.getItem('favorites')) || []
        }
    }

    componentDidMount() {
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().subtract(7, 'days').format('YYYY-MM-DD')}&primary_release_date.lte=${moment().format('YYYY-MM-DD')}&api_key=8c2c5c205a0ac5bb229fe92084e87cf4`)

            .then(result =>
                result.json())
            .then(res => {
                this.setState({ movies: res.results })

                console.log('moment', moment().format('YYYY-MM-DD'))
                console.log('moment - 7', moment().subtract(7, 'd').format('YYYY-MM-DD'))
            });
    }

    handleClickFavorite = (idMovie) => {
        this.setState({
            favorites: [...this.state.favorites, idMovie],
            currentBattle: this.state.currentBattle + 2
        });
        localStorage.setItem('favorites', JSON.stringify([...this.state.favorites, idMovie]))
    }


    render() {
        console.log('local storage key:"favorites"',this.state.favorites, localStorage.getItem("favorites"));
        const currentBattle = this.state.currentBattle
        const duelMovies = this.state.movies.slice(currentBattle, currentBattle + 2)
        console.log('duel movies', duelMovies);


        return (
            <div className='containerPopular'>
                {duelMovies.length >= 2 ?
                    duelMovies.map(movie => (
                        <Card
                            handleClickFavorite={() => this.handleClickFavorite(movie.id)} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} />
                    )) : <h1>Array is Empty</h1>
                }
            </div>
        );
    }
}

export default WeeklyBattle;