import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (vidId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + vidId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const FilterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = FilterData.length ? FilterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
