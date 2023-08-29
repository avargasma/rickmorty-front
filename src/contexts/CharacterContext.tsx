import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CharacterType } from "../services/characters/types";

export interface CharacterContextInterface {
    currentId: string,
    characters: CharacterType[],
    charactersStarred: CharacterType[],
    setCharacters: Dispatch<SetStateAction<CharacterType[]>>,
    setCharactersStarred: Dispatch<SetStateAction<CharacterType[]>>,
    setCurrentId: Dispatch<SetStateAction<string>>,
}

const defaultState = {
    currentId: '',
    characters:[],
    charactersStarred:[],
    setCharacters: (characters: CharacterType[]) => { },
    setCharactersStarred: (characters: CharacterType[]) => { },
    setCurrentId: (currentId: string) => { },
} as CharacterContextInterface;

export const CharacterContext = createContext<CharacterContextInterface>(defaultState);

type CharacterProviderProps = {
    children: React.ReactNode;
}

export default function CharacterProvider({ children }: CharacterProviderProps) {
    const [currentId, setCurrentId] = useState<string>('');
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [charactersStarred, setCharactersStarred] = useState<CharacterType[]>([]);
    
    return (
        <CharacterContext.Provider value={{currentId, setCurrentId, characters, setCharacters, charactersStarred, setCharactersStarred }} >
            {children}
        </CharacterContext.Provider>
    )
}