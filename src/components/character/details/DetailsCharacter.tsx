import { useCallback, useContext, useEffect, useState } from "react";
import { CharacterType } from "../../../services/characters/types";
import { GetCharacter } from "../../../services/characters/service";
import PropertyCharacter from "../common/PropertyCharacter";
import { CharacterContext } from "../../../contexts/CharacterContext";

interface DetailsCharacterProps {
    id?: string;
}

const DetailsCharacter = ({ id }: DetailsCharacterProps) => {
    const { currentId, setCurrentId, characters } = useContext(CharacterContext);
    const [currentCharacter, setCurrentCharacter] = useState<CharacterType>();

    const fetchData = useCallback(async (id: string) => {
        const data = await GetCharacter(id);
        
        setCurrentCharacter(data.character);
    }, [])

    useEffect(() => {
        if (currentId) {
            fetchData(currentId);
        }else if(id){
            fetchData(id);
        } 
        else if (characters.length) {
            const firtCharacterId = characters[0].id;
            setCurrentId(firtCharacterId);
            fetchData(firtCharacterId);
        }
    }, [currentId, characters]);

    return (
        <div className="flex">
            <div className="w-full">
                <div className="flex items-center pb-8">
                    <div>
                        <img className="h-20 w-20 pb-2 rounded-full"
                            src={currentCharacter?.image} />
                        <p className="text-2xl text-grey-darkest">{currentCharacter?.name}</p>
                    </div>
                </div>
                {currentCharacter &&
                    <>
                        <PropertyCharacter label={'Specie'} value={currentCharacter.species} />
                        <PropertyCharacter label={'Status'} value={currentCharacter.status} />
                        <PropertyCharacter label={'Ocupation'} value={'?'} />
                    </>}
            </div>
        </div>
    )
}

export default DetailsCharacter