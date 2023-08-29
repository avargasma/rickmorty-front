import { useEffect, useCallback, useState, useContext } from "react";

import Search from "../filter/Search"
import CharactersList from "./CharactersList"
import StarredCharacters from "./StarredCharacters"
import { GetCharacters } from "../../../services/characters/service";
import { CharacterContext } from "../../../contexts/CharacterContext";
import FilterProvider from "../../../contexts/FilterContext";

const CharactersListAndSearch = () => {
    const { characters, setCharacters, setCurrentId } = useContext(CharacterContext);
    const [starredIds, setStarredIds] = useState<Array<string>>([]);

    const fetchData = useCallback(async () => {
        const data = await GetCharacters();
        if (data?.characters?.results){
            setCharacters(data.characters.results);
            setCurrentId(data.characters.results[0].id);
        }
        else{
            setCharacters([]);            
            setCurrentId('');
        }
    }, [])

    useEffect(() => {
        fetchData();
        setStarredIds(JSON.parse(localStorage.getItem('starredIds') || '[]'));

    }, [fetchData]);

    return (
        <FilterProvider>
            <div className="home-left-items">
                <div className="home-left-title">
                    <p>Rick and Morty list</p>
                </div>
                <Search />
                <StarredCharacters characters={characters.filter(x => starredIds.includes(x.id))} />
                <CharactersList characters={characters} />
            </div>
        </FilterProvider>
    )
}

export default CharactersListAndSearch