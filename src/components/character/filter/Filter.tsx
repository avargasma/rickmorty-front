import { FilterCharacter } from "../../../services/characters/types"
import CheckFilterCharacter from "./CheckFilterCharacter"
import CheckFilterSpecie from "./CheckFilterSpecie"
import FilterButton from "./FilterButton"

type FilterProps = {
  onSearch(filter: FilterCharacter): void;
}

const Filter = ({onSearch}: FilterProps) => {
  return (
    <div className="container-filter">
      <div className="bg-white rounded-md">
        <CheckFilterCharacter />
        <CheckFilterSpecie />
        <FilterButton onSearch={onSearch} />
      </div>
    </div>
  )
}

export default Filter