import { useEffect, useCallback, useState } from "react";
import { GetCharacters } from "../services/characters/service";
import { CharactersData } from "../services/characters/types";

const Characters = () => {
    const [charactersData, setCharactersData] = useState<CharactersData>({ results: [], info: null });

    const fetchData = useCallback(async () => {
        const data = await GetCharacters();

        setCharactersData(data.characters);
    }, [])

    useEffect(() => { fetchData() }, [fetchData]);

    return (
        <div>{charactersData.results.map((x: any, index) => (<h1 key={index}>{x.name}</h1>))}</div>
    )
}

export default Characters