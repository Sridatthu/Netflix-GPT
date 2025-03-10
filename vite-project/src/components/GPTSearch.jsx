import { BG } from "../utils/constants";
 import GptMovieSuggestions from "./GptMovieSuggestions";
 import GptSearchBar from "./GptSearchBar";
 
 const GPTSearch = () => {
   return (
    <>
    <div className="fixed -z-10">
      <img className="h-screen w-screen object-cover" src={BG} alt="logo" />
      </div>
    <div className="">
    <GptSearchBar />
    <GptMovieSuggestions />
  </div>
</>
   );
 };
 export default GPTSearch;
