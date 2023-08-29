import DetailsCharacter from "../components/character/details/DetailsCharacter"
import CharactersListAndSearch from "../components/character/list/CharactersListAndSearch"
import CharacterProvider from "../contexts/CharacterContext";

const Home = () => {
  return (
    <CharacterProvider>
      <div className="h-screen">
        <div className="home-left">
          <CharactersListAndSearch />
          <div className="home-right">
            <DetailsCharacter />
          </div>
        </div>
      </div>
    </CharacterProvider>
  )
}

export default Home