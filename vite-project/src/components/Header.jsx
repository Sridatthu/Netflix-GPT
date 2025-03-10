import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, USER_AVATAR,SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from "../utils/gptSlice";
 import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName|| "user",
            photoURL: photoURL || USER_AVATAR,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  },[])
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut=()=>{
    signOut(auth)
    .then(() => { })
    .catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img src={LOGO} alt="logo" className='w-44'/>
        {user && (
         <div className="flex p-2">
          {showGptSearch && (
             <select
               className="p-3 m-2 bg-gray-900 text-white rounded-lg"
               onChange={handleLanguageChange}
             >
               {SUPPORTED_LANGUAGES.map((lang) => (
                 <option key={lang.identifier} value={lang.identifier}>
                   {lang.name}
                 </option>
               ))}
             </select>
           )}
           <button
             className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
             onClick={handleGptSearchClick}
           >
             {showGptSearch ? "Homepage" : "GPT Search"}
           </button>
           <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
           <button onClick={handleSignOut} className="font-bold text-white ">
             (Sign Out)
           </button>
         </div>
       )}
    </div>
  )
}

export default Header
