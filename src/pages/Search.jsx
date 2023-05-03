import React from 'react'
import {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const searchURL = `https://api.themoviedb.org/3/search/movie`;
const apiKey = 'api_key=a9c745fe483d8a5bd154e9076691f298';

import './MovieGrid.css'

const Search = () => {
  
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")


  const getSearchedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results)
}

useEffect(() => {

    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=batman
    getSearchedMovies(searchWithQueryURL)
}, [query])

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className='query-text'>{query}</span></h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
    )
}

export default Search