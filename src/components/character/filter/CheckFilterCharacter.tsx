import CheckFilterItem from "./CheckFilterItem";
import { ItemType } from "./types";
import { CharacterFilterId, FILTER_BY_CHARACTER } from "./constants";

const items:ItemType[] = [
  {
    id: CharacterFilterId,
    label: 'All',
    checked: false,
  },
  {
    id: 'starred',
    label: 'starred',
    checked: false,
  },
  {
    id: 'others',
    label: 'Others',
    checked: false,
  },
];

const CheckFilterCharacter = () => {  
  return (
    <>
      <div className="pt-5 pl-6 pb-2" ><p className="text-grey-500">Character</p></div>
      <div className="wrapper-filter">
        {items.map((item, index) =>{
          return  (
            <CheckFilterItem filterBy={FILTER_BY_CHARACTER} item={item} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default CheckFilterCharacter