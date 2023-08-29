import { useContext, useState, useEffect, useCallback } from "react";
import { BiSearch } from "react-icons/bi";
import { HiAdjustments } from "react-icons/hi";

import Filter from "./Filter";
import { FilterContext } from "../../../contexts/FilterContext";
import { CharacterContext } from "../../../contexts/CharacterContext";
import { CharacterFilterId, SpecieFilterId } from "./constants";
import { FilterCharacter } from "../../../services/characters/types";
import { GetCharacters, GetCharactersByFilter } from "../../../services/characters/service";

const Search = () => {
    const { setCharacters, setCurrentId } = useContext(CharacterContext);
    const { show, characterFilerBy, specieFilterBy, setShow, setFilter } = useContext(FilterContext);
    const { characters } = useContext(CharacterContext);
    const [countItems, setCountItems] = useState<number>(0);
    const [filtersSelected, setFiltersSelected] = useState<number>(0);

    useEffect(() => {
        setFiltersSelected(0);
        if (characterFilerBy !== CharacterFilterId && specieFilterBy !== SpecieFilterId)
            setFiltersSelected(2);
        else if(characterFilerBy !== CharacterFilterId || specieFilterBy !== SpecieFilterId)
            setFiltersSelected(1);        
    }, [characterFilerBy, specieFilterBy]);

    useEffect(() => {
        setCountItems(characters.length);
    }, [characters]);

    const fetchCharactersByFilter = useCallback(async (filter:FilterCharacter) => {
        const data = await GetCharactersByFilter(filter);
        processResult(data);            
    }, []);

    const fetchCharacters = useCallback(async () => {
        const data = await GetCharacters();
        processResult(data);
    }, []);

    const onSearch = (filter:FilterCharacter) =>{
        fetchCharactersByFilter(filter);
    }

    const onChanheText = (e: any) => {
        const value = e.currentTarget.value?.toLocaleLowerCase();
        setFilter(value);
    }

    const onClickShow = (show:boolean) => {
        if (!filtersSelected){
            fetchCharacters();
        }
        setShow(show);
    }

    const processResult = (data:any) => {
        if (data?.characters?.results){
            setCharacters(data.characters.results);
            setCurrentId(data.characters.results[0].id);
        }
        else{
            setCharacters([]);            
            setCurrentId('');
        }     
    }

    return (
        <div>
            <div className="div-search">
                <BiSearch className="search-icon text-grey-400" />
                <input type={"search"} className="search-input" onChange={onChanheText} placeholder="Search or filter results" />
                <span className="filter-icon" onClick={() => onClickShow(!show)}>
                    <HiAdjustments className="w-6 h-6" />
                </span>
            </div>
            {!show && filtersSelected > 0 && 
                <div className="flex space-x-0 items-center">
                    <div className="pt-5 px-2 pb-2 grow"><p className="text-blue-light font-bold tracking-wider">{countItems} Results</p></div>
                    <div className="flex pt-5 px-2 pb-2 grow justify-end " ><p className="bg-green-lighter bg-opacity-25 text-green font-bold py-1 px-4 rounded-2xl">{filtersSelected} Filter</p></div>
                </div>
            }
            {show && <Filter onSearch={onSearch} />}
        </div>
    )
}

export default Search