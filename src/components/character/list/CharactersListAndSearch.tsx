import { useEffect, useCallback, useContext } from "react";

import Search from "../filter/Search"
import CharactersList from "./CharactersList"
import StarredCharacters from "./StarredCharacters"
import { GetCharacters } from "../../../services/characters/service";
import { CharacterContext } from "../../../contexts/CharacterContext";
import FilterProvider from "../../../contexts/FilterContext";

const CharactersListAndSearch = () => {
    const { characters, charactersStarred, setCharacters, setCurrentId, setCharactersStarred } = useContext(CharacterContext);

    const fetchData = useCallback(async () => {
        const data = await GetCharacters();
        if (data?.characters?.results){
            setCharacters(data.characters.results);
            setCurrentId(data.characters.results[0].id);            
            const localStarred = JSON.parse(localStorage.getItem('starredIds') || '[]');
            setCharactersStarred(data.characters.results.filter((x:any) => localStarred.includes(x.id)));
        }
        else{
            setCharacters([]);            
            setCurrentId('');
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <FilterProvider>
            <div className="home-left-items">
                <div className="home-left-title">
                    <p>Rick and Morty list</p>
                </div>
                <Search />
                <StarredCharacters characters={charactersStarred} />
                <CharactersList characters={characters} />
            </div>
        </FilterProvider>
    )
}

export default CharactersListAndSearch