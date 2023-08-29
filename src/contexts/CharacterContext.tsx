import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CharacterType } from "../services/characters/types";

export interface CharacterContextInterface {
    currentId: string,
    characters: CharacterType[],
    setCharacters: Dispatch<SetStateAction<CharacterType[]>>,
    setCurrentId: Dispatch<SetStateAction<string>>,
}

const defaultState = {
    currentId: '',
    characters:[],
    setCharacters: (characters: CharacterType[]) => { },
    setCurrentId: (currentId: string) => { },
} as CharacterContextInterface;

export const CharacterContext = createContext<CharacterContextInterface>(defaultState);

type CharacterProviderProps = {
    children: React.ReactNode;
}

export default function CharacterProvider({ children }: CharacterProviderProps) {
    const [currentId, setCurrentId] = useState<string>('');
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    
    return (
        <CharacterContext.Provider value={{currentId, setCurrentId, characters, setCharacters }} >
            {children}
        </CharacterContext.Provider>
    )
}