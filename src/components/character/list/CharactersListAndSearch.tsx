import { useEffect, useCallback, useState, useContext } from "react";

import Seacrh from "../common/Seacrh"
import CharactersList from "./CharactersList"
import StarredCharacters from "./StarredCharacters"
import { GetCharacters } from "../../../services/characters/service";
import { CharacterContext } from "../../../contexts/CharacterContext";

const CharactersListAndSearch = () => {
    const { characters, setCharacters } = useContext(CharacterContext);    
    const [starredIds, setStarredIds] = useState<Array<string>>([]);

    const fetchData = useCallback(async () => {
        const data = await GetCharacters();
        if(data?.characters?.results)
            setCharacters(data.characters.results);
    }, [])

    useEffect(() => {
        fetchData();
        setStarredIds(JSON.parse(localStorage.getItem('starredIds') || '[]'));

    }, [fetchData]);

    return (
        <div className="sm:w-1/3 w-full border flex flex-col p-5 pt-10">
            <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <p className="text-2xl text-grey-darkest">Rick and Morty list</p>
            </div>
            <Seacrh />       
            <StarredCharacters characters={characters.filter(x => starredIds.includes(x.id))} />
            <CharactersList characters={characters} />
            
        </div>
    )
}

export default CharactersListAndSearch