
import { executeRequest } from "../../utils/api/apiFactory"
import { getChatactersQuery } from "./queries"

export const GetCharacters = () => {
    return executeRequest(getChatactersQuery, { page: 1 });
};


