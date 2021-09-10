import React, { Component } from 'react';
import Card from '../Components/Card';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            favIDs: this.getStorage()
        }
    }

    componentDidMount() {
        this.state.favIDs !== null && this.state.favIDs.map(idMovie => this.getMovie(idMovie))
    }

    getStorage = () => JSON.parse(localStorage.getItem('favorites'));

    getMovie = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8c2c5c205a0ac5bb229fe92084e87cf4`)
            .then(result => result.json())
            .then(json => this.setState({ movies: [...this.state.movies, json] }))
    }

    handleClearFavorite = () => {
        localStorage.clear()
        this.setState({movies: []})
       setTimeout(() => {
        alert('favorites is cleared') 
       }, 500); 
    }




    render() {

        console.log('favIDs from favorite', this.state.favIDs)
        console.log('fetch update state movies', this.state.movies)
        return (
            <div>
                { this.state.favIDs  ?
                    <div>
                        <button className='btnClearFavorite' onClick={this.handleClearFavorite} >Clear Favorites</button>
                        <div className='containerPopular'>
                            {this.state.movies.map(movie => (
                                <Card poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} />
                            ))}
                        </div>
                    </div>
                    : <h1>Favorites section is empty</h1>
                }
            </div>
        );
    }
}

export default Favorites;