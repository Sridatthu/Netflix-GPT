import React from 'react'
import MovieCard from "./MovieCard";
const GptMovieList = ({ title, movies }) => {
   return (
       <div className="px-6 ">
         <h1 className="text-3xl py-4 text-white">{title}</h1>
         <div className=" ">
           <div className="flex flex-wrap m-4 p-2 ">
             {movies?.map((movie) => (
               <MovieCard key={movie.id} posterPath={movie.poster_path} />
             ))}
           </div>
         </div>
       </div>
     );
}

export default GptMovieList
