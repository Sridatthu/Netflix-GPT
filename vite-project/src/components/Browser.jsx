import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer";
 import SecondaryContainer from "./SecondaryContainer";
 import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from '../hooks/useTopRated';
import GPTSearch from "./GPTSearch";
 import { useSelector } from "react-redux";
const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();

   return (
     <div>
       <Header />
       {showGptSearch ? (
         <GPTSearch />
       ) : (
         <>
           <MainContainer />
           <SecondaryContainer />
         </>
       )}
     </div>
   );
}

export default Browser
