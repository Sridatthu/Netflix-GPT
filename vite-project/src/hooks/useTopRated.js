
import { useEffect } from "react";
 import { useDispatch } from "react-redux";
 import { API_OPTIONS } from "../utils/constants";
 import { addNowPlayingMovies, addTrendingMovies } from "../utils/moviesSlice";
 
 const useTopRated = () => {
   // Fetch Data from TMDB API and update store
   const dispatch = useDispatch();
 
   const getTopRatedMovies = async () => {
     const data = await fetch(
       "https://api.themoviedb.org/3/movie/top_rated?page=1",
       API_OPTIONS
     );
     const json = await data.json();
     dispatch(addTrendingMovies(json.results));
   };
 
   useEffect(() => {
     getTopRatedMovies();
   }, []);
 };
 
 export default useTopRated;
