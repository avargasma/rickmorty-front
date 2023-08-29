import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CharacterFilterId, SpecieFilterId } from "../components/character/filter/constants";

export interface FilterContextInterface {
    show: boolean,
    queryFilter: string,
    characterFilerBy: string,
    specieFilterBy: string,
    setShow: Dispatch<SetStateAction<boolean>>,
    setFilter: Dispatch<SetStateAction<string>>,
    setCharacterFilerBy: Dispatch<SetStateAction<string>>,
    setSpecieFilterBy: Dispatch<SetStateAction<string>>,
}

const defaultState = {
    show: false,
    queryFilter: '',
    characterFilerBy: '',
    specieFilterBy: '',
    setShow: (show: boolean) => { },
    setFilter: (queryFilter: string) => { },
    setCharacterFilerBy: (filterBy: string) => { },
    setSpecieFilterBy: (filterBy: string) => { },
} as FilterContextInterface;

export const FilterContext = createContext<FilterContextInterface>(defaultState);

type FilterProviderProps = {
    children: React.ReactNode;
}

export default function FilterProvider({ children }: FilterProviderProps) {
    const [characterFilerBy, setCharacterFilerBy] = useState<string>(CharacterFilterId);
    const [specieFilterBy, setSpecieFilterBy] = useState<string>(SpecieFilterId);
    const [queryFilter, setFilter] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    return (
        <FilterContext.Provider value={{ characterFilerBy, setCharacterFilerBy, 
            specieFilterBy, setSpecieFilterBy, 
            queryFilter, setFilter, show, setShow }} >
            {children}
        </FilterContext.Provider>
    )
}