export async function executeRequest(
    query: string,
    variables?: unknown,
): Promise<any> {
    const path = 'https://rickandmortyapi.com/graphql';
    const headers: Record<string, string> = {};
    let body;
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify({ query, variables });

    const fetchOptions = {
        body,
        headers,
        method: 'POST',
    };
    const handleError = (e: any) => console.log(e);

    return fetch(path, fetchOptions)
        .then((response: Response) => parseFetchResponse(response), handleError)
        .then(data => data?.data, handleError);
}

const parseFetchResponse = (response: Response) => {
    return response.ok ? parseSuccessResponse(response) : parseErrorResponse(response);
}

const parseSuccessResponse = (response: Response) => {
    return isJsonResponse(response) ? response.json() : response.text();
}

const parseErrorResponse = async (response: Response) => {
    const text = await response.text();
    return await Promise.reject({
        status: response.status,
        response: isJsonResponse(response) ? tryParseJson(text) : text,
    });
}

const isJsonResponse = (response: Response) => {
    const contentType = response.headers.get('Content-Type') || '';
    return contentType.startsWith('application/json');
}

const tryParseJson = (text: string) => {
    try {
        return text && text.length ? JSON.parse(text) : text;
    }
    catch {
        return text;
    }
}