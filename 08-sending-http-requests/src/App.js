import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //promises -> JS feature
  /*function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films",{
      method:'GET' // by default method is GET
    }).then(response => {
      return response.json();
    }).then(data => {
      const transformedMovies = data.results.map(moviedata => {
        return {
          id: moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate: moviedata.release_date
        };
      });
      setMovies(transformedMovies);
    });
  }*/



  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films", {
        method: 'GET' // by default method is GET
      });

      if (!response.ok) {
        throw new Error("Something went wrong..!!!!");
      }
      const data = await response.json();

      const transformedMovies = data.results.map(moviedata => {
        return {
          id: moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate: moviedata.release_date
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);


  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); //pointer to function


  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  function addMovieHandler(movie) {
    console.log(movie);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );

  /*return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Movies NOT found...!!!!</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading ...............</p>}
      </section>
    </React.Fragment>
  );*/
}

export default App;