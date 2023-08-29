import { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { FilterCharacter } from "../../../services/characters/types"
import CheckFilterCharacter from "./CheckFilterCharacter"
import CheckFilterSpecie from "./CheckFilterSpecie"
import FilterButton from "./FilterButton"

type FilterProps = {
  onSearch(filter: FilterCharacter): void;
  onCloseFilter(): void;
}

const Filter = ({ onSearch, onCloseFilter }: FilterProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("only screen and (max-width: 640px)").matches);
  }, [])
  

  return (
    <div className={`container-filter ${isMobile ? 'inset-0 p-0' : ''}`}>
      <div className={`${isMobile ? 'h-screen' : ''} bg-white rounded-md`}>
        {isMobile &&<div className="pt-4 pl-7 flex items-center">
          <div className="flex-none w-14 h-14 flex items-center" onClick={() => onCloseFilter()}><BsArrowLeft className='w-6 h-6 my-6 text-purple m-0' /></div>
          <div className="flex grow h-14 justify-center"><p className="flex items-center">Filters</p></div>
          <div className="flex-none w-14 h-14"></div>          
        </div>}

        <CheckFilterCharacter />
        <CheckFilterSpecie />
        <FilterButton isMobile={isMobile} onSearch={onSearch} />
      </div>
    </div>
  )
}

export default Filter