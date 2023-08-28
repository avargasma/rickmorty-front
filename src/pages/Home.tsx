import DetailsCharacter from "../components/character/details/DetailsCharacter"
import CharactersListAndSearch from "../components/character/list/CharactersListAndSearch"
import CharacterProvider from "../contexts/CharacterContext";

const Home = () => {
  return (
    <CharacterProvider>
      <div className="h-screen">
        <div className="flex border border-grey rounded shadow-lg h-full">
          <CharactersListAndSearch />
          <div className="sm:flex hidden sm:w-0/1 w-2/3 border flex-col py-5 pl-20 pt-10 px-10">
            <DetailsCharacter />
          </div>
        </div>
      </div>
    </CharacterProvider>
  )
}

export default Home