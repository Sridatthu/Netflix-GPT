import { BG } from "../utils/constants";
 import GptMovieSuggestions from "./GptMovieSuggestions";
 import GptSearchBar from "./GptSearchBar";
 
 const GPTSearch = () => {
   return (
     <div>
       <div className="absolute -z-10">
         <img src={BG} alt="logo" />
       </div>
       <GptSearchBar />
       <GptMovieSuggestions />
     </div>
   );
 };
 export default GPTSearch;
