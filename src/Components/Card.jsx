import React, { Component } from 'react';

class Card extends Component {

    render() {



        return (
            <>

                <div className='containerCard'>
                    <img className='imgCard' src={`https://image.tmdb.org/t/p/w300/${this.props.poster_path}`} alt={this.props.title} />
                    <h2 className='titleCard'>{this.props.title}</h2>
                    <p className='releaseCard'>{this.props.release_date}</p>
                    <p className='overviewCard'>{this.props.overview}</p>
                </div>


            </>
        );
    }
}

export default Card;