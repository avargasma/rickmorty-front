import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CharacterType } from "../../../services/characters/types";
import { CharacterContext } from "../../../contexts/CharacterContext";

interface CharacterProps {
    character: CharacterType;
}

const Character = ({ character }: CharacterProps) => {
    const navigate = useNavigate();
    const { currentId, setCurrentId } = useContext(CharacterContext);

    const onStarred = () => {
        let starredIds = JSON.parse(localStorage.getItem('starredIds') || '');
        if (starredIds instanceof Array) {
            starredIds.push(character.id);

        } else {
            starredIds = [];
            starredIds.push(character.id);
        }
        localStorage.setItem('starredIds', JSON.stringify(starredIds));
    }

    const onSelectCharacter = () => {
        setCurrentId(character.id);
        let isMobile = window.matchMedia("only screen and (max-width: 640px)").matches;
        if(isMobile){
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
        </div>
    )
}

export default Character