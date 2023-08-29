
import { executeRequest } from "../../utils/api/apiFactory"
import { getChatacterByFilterQuery, getChatacterQuery, getChatactersQuery } from "./queries"
import { FilterCharacter } from "./types";

export const GetCharacters = () => {
    return executeRequest(getChatactersQuery, { page: 1 });
};

export const GetCharacter = (id:string) => {
    return executeRequest(getChatacterQuery, { id });
};

export const GetCharactersByFilter = (filter:FilterCharacter) => {
    return executeRequest(getChatacterByFilterQuery, { page: 1, filter });
};

