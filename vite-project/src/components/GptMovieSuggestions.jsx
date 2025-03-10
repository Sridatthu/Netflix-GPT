import { useSelector } from "react-redux";

import GptMovieList from "./GptMovieList";
const GptMovieSuggestions = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;
  
    return (
      <div className="p-4  text-white opacity-85">
        <div>
        <GptMovieList
              key={movieNames}
              title={movieNames}
              movies={movieResults}
            />
        </div>
      </div>
    );
  };
  export default GptMovieSuggestions;
