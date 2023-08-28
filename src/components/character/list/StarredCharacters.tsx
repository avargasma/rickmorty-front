import { CharacterType } from "../../../services/characters/types";
import Character from "../common/Character"

interface StarredCharactersProps {
    characters: CharacterType[];
}

const StarredCharacters = ({ characters }: StarredCharactersProps) => {
    return (
        <>
            <p className="text-grey-darkest p-2">Starred Characters {`(${characters.length})`}</p>
            <div className={`bg-grey-lighter ${characters.length ? 'overflow-auto' : ''}`}>
                {characters.map((character, index) => (
                    <Character character={character} key={index} />
                ))}
            </div>
        </>
    )
}

export default StarredCharacters