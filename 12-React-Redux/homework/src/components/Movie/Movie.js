import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import {Link} from 'react-router-dom'
import './Movie.css';

class Movie extends React.Component {

//match
//this.props.match.params.id   ahi accedo a la url, al id de la pelicula

//en que momento nos interesa despachar la accion de getMovieDetail? cuando el componente se monte

componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
}

    render() {
        return (
            <div className="container">
                Detalle de la pelicula 
                <div className='movie-card'>
                    <span className='title span'>
                        <p className='title'>
                            {this.props.movie.Title}
                        </p>
                    </span>
                    
                </div>
                <h3>{this.props.movie.Title}</h3> 
                <p>{this.props.movie.Genre}</p>

            </div>
        );
    }
}

const mapStateToProps= (state) =>{
    return{
        movie: state.movieDetail
    }
}

export default connect(mapStateToProps, {getMovieDetail})(Movie);