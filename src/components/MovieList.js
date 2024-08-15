import MovieCard from "../components/MovieCard";
const MovieList = ({ title, movies }) => {
  // if (movies === null) return;

  return (
    <div className="px-6  text-white">
      <h1 className="text-3xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
