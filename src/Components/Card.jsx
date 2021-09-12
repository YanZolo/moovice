import React, { Component } from 'react';

class Card extends Component {

    render() {



        return (
            <>

                <div 
                className={` containerCard  ${this.props.isInFavorite && 'containerCardStar'}`} 
                onClick={this.props.handleClickFavorite}>
                    <img
                        className=' imgCard'
                        src={`https://image.tmdb.org/t/p/w300/${this.props.poster_path}`}
                        alt={this.props.title}
                    />
                    <h2
                        className='titleCard'>{this.props.title}
                    </h2>
                    <p
                        className='overviewCard'>{this.props.overview}
                    </p>
                    <p
                        className='releaseCard'>release date: {this.props.release_date}
                    </p>

                    {
                        this.props.componentMount &&
                        <button
                            className='btnFavorite'
                            onClick={this.props.handleClickFavoriteBtn}>{this.props.isInFavorite ?
                                'remove favorite' : 'add favorite'}
                        </button>
                    }
                </div>


            </>
        );
    }
}

export default Card;