import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";

import DetailsCharacter from "../components/character/details/DetailsCharacter"
import { CharacterContext } from "../contexts/CharacterContext";

const Favorites = () => {
  let navigation = useNavigate();
  let { id } = useParams();
  const { setCurrentId } = useContext(CharacterContext);

  const backToList = ()=>{
    if(id)
      setCurrentId(id);
    navigation('/');
  }

  return (
    <div className="flex w-full h-screen border flex-col py-5 pt-10 px-10">
      <BsArrowLeft className='w-6 h-6 my-6 text-purple' onClick={()=>backToList()} />
      <DetailsCharacter id={id} />
    </div>
  )
}

export default Favorites