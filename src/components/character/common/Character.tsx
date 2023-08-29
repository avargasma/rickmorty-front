import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiHeart, BiSolidHeart } from "react-icons/bi";

import { CharacterType } from "../../../services/characters/types";
import { CharacterContext } from "../../../contexts/CharacterContext";

interface CharacterProps {
    character: CharacterType;
}

const Character = ({ character }: CharacterProps) => {
    const navigate = useNavigate();
    const { currentId, setCurrentId, charactersStarred, setCharactersStarred } = useContext(CharacterContext);
    const [isStarred, setIsStarred] = useState<Boolean>(false);

    useEffect(() => {
        if(charactersStarred.map(x=>x.id).includes(character.id))
            setIsStarred(true);
        else
            setIsStarred(false);
    }, [charactersStarred])

    const onStarred = () => {
        let starredIds = JSON.parse(localStorage.getItem('starredIds') || '[]');
        const isStarred = charactersStarred.map(x=>x.id).includes(character.id);

        if(isStarred){
            if(starredIds.length === 1){
                starredIds = [];
                setCharactersStarred([]);
                return;
            }

            const indexCharacterStarred = charactersStarred.indexOf(character);
            const indexCharacterStarredId = starredIds.indexOf(character.id);
            starredIds = starredIds.slice(indexCharacterStarredId);
            setCharactersStarred([...charactersStarred.slice(indexCharacterStarred)]);
        }else{
            starredIds.push(character.id);
            setCharactersStarred([...charactersStarred, character]);
        }
        
        localStorage.setItem('starredIds', JSON.stringify(starredIds));
    }

    const onSelectCharacter = () => {
        setCurrentId(character.id);
        let isMobile = window.matchMedia("only screen and (max-width: 640px)").matches;
        if (isMobile) {
            navigate(`/details/${character.id}`);
        }
    }

    return (
        <div onClick={onSelectCharacter} className={
            `${currentId === character.id ? 'bg-purple-lighter' : ''} wrapper-character`}>
            <div>
                <img className="h-8 w-8 rounded-full" src={character.image} />
            </div>
            <div className="ml-4 flex-1 py-4">
                <div className="flex items-bottom justify-between">
                    <p className="font-semibold">{character.name}</p>
                </div>
                <p className="text-grey-500 mt-1 text-sm">{character.species}</p>
            </div>
            <div className="hover:cursor-default" onClick={onStarred}>
                {isStarred ? <BiSolidHeart className="w-[18px] h-[18px] text-green" /> : <BiHeart className="w-[18px] h-[18px] text-grey-300" />}
            </div>
        </div>
    )
}

export default Character