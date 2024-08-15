import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 relative z-20 pl-5">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Populr"} movies={movies.popularMovies} />
          <MovieList title={"TopRated"} movies={movies.TopRatedMovies} />
          <MovieList title={"UpComing Movies"} movies={movies.UpComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
