import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../contexts/FilterContext";
import { CharacterFilterId, SpecieFilterId } from "./constants";
import { FilterCharacter } from "../../../services/characters/types";

type FilterButtonProps = {
    onSearch(filter: FilterCharacter): void;
}

const FilterButton = ({ onSearch }: FilterButtonProps) => {
    const { characterFilerBy, specieFilterBy, queryFilter, setShow } = useContext(FilterContext);
    const [enableButton, setEnableButton] = useState<boolean>(false);

    useEffect(() => {
        if (characterFilerBy !== CharacterFilterId || specieFilterBy !== SpecieFilterId)
            setEnableButton(true);
        else
            setEnableButton(false);

    }, [characterFilerBy, specieFilterBy]);

    const onClick = () => {
        setShow(false);
        onSearch({ name: queryFilter, species: specieFilterBy });
    }

    return (
        <div className="container-filter-button">
            <div className={`${enableButton ? 'bg-purple-light' : ''} wrapper-filter-button`}>
                <button type="button" disabled={!enableButton}  className={`${enableButton ? 'text-white' : ''} check-button-search`} onClick={() => onClick()}>Filter</button>
            </div>
        </div>
    )
}

export default FilterButton