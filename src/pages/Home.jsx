
import React from 'react'
import {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';

const moviesURL = 'https://api.themoviedb.org/3/movie/' ;
const apiKey = 'api_key=a9c745fe483d8a5bd154e9076691f298';

import './MovieGrid.css';

const Home = ({slides}) => {
    /*
    const [current, setCurrent] = useState(0);
    const length = slides;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }*/
  
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        console.log(topRatedUrl)
        getTopRatedMovies(topRatedUrl)
    }, [])

    /*
    return(
    <section className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    {topMovies.lenght > 0 && topMovies.map((movie, index) => {
    return (
        <div
        className={index === current ? 'slide active' : 'slide'}
        key={index}
        >
        {index === current && (
            <MovieCard key={movie.id} movie={movie} />
        )}
        </div>
    );
    })}
</section>
)*/


return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );


}

export default Home