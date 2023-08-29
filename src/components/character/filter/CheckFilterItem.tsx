import { useContext, useEffect, useState } from "react";
import { ItemType } from "./types";
import { FilterContext } from "../../../contexts/FilterContext";
import { FILTER_BY_CHARACTER, FILTER_BY_SPECIE } from "./constants";

interface CheckFilterItemProps {
    item: ItemType;
    filterBy: string;
}

const CheckFilterItem = ({ item, filterBy }: CheckFilterItemProps) => {    
    const { characterFilerBy, setCharacterFilerBy, specieFilterBy, setSpecieFilterBy } = useContext(FilterContext);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    useEffect(() => {
        switch (filterBy) {
            case FILTER_BY_CHARACTER:
                validateForCharacter(characterFilerBy);                
                break;
            case FILTER_BY_SPECIE:
                validateForSpecie(specieFilterBy);
                break;
            default:
                break;
        }        
    }, [characterFilerBy, specieFilterBy]);

    const validateForCharacter = (characterFilerBy:string)=>{
        if (characterFilerBy === item.id) {
            setIsChecked(true);
        }else{
            setIsChecked(false);
        }
    }

    const validateForSpecie = (specieFilterBy:string)=>{
        if (specieFilterBy === item.id) {
            setIsChecked(true);
        }else{
            setIsChecked(false);
        }
    }

    const setForCharacter = ()=>{
        setCharacterFilerBy(item.id);
        if(characterFilerBy === item.id && isChecked)
            setIsChecked(false);
        else
            setIsChecked(true);
    }
    
    const setForSpecie = ()=>{
        setSpecieFilterBy(item.id);
        if(specieFilterBy === item.id && isChecked)
            setIsChecked(false);
        else
            setIsChecked(true);
    }

    const onClick = (e:any)=>{
        const checked = e.currentTarget.checked;
        if(checked){
            switch (filterBy) {
                case FILTER_BY_CHARACTER:
                    setForCharacter();               
                    break;
                case FILTER_BY_SPECIE:
                    setForSpecie();
                    break;
                default:
                    break;
            }            
        }else{
            setIsChecked(false);
        }
    }

    return (
        <div className="wrapper-check-filter">
            <input type="checkbox" id={item.id} onChange={onClick} checked={isChecked} className="peer hidden w-full" />
            <label htmlFor={item.id} className={`check-button-search ${isChecked ? 'bg-purple-lighter' : ''}`}>{item.label}</label>
        </div>
    )
}

export default CheckFilterItem