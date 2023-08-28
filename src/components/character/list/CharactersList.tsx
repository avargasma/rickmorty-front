import { CharacterType } from "../../../services/characters/types";
import Character from "../common/Character"

interface CharactersListProps {
    characters: CharacterType[];
}

const CharactersList = ({ characters }: CharactersListProps) => {
    return (
        <>
            <p className="text-grey-darkest p-2">Characters {`(${characters.length})`}</p>
            <div className={`bg-grey-lighter ${characters.length ? 'overflow-auto' : ''}`}>
                {characters.map((character, index) => (
                    <Character character={character} key={index} />
                ))}
            </div>
        </>
    )
}

export default CharactersList