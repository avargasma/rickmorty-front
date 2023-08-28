
import { executeRequest } from "../../utils/api/apiFactory"
import { getChatacterQuery, getChatactersQuery } from "./queries"

export const GetCharacters = () => {
    return executeRequest(getChatactersQuery, { page: 1 });
};

export const GetCharacter = (id:string) => {
    return executeRequest(getChatacterQuery, { id });
};

