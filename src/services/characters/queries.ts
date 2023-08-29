export const getChatactersQuery = `
query getCharacters($page:Int) {
    characters(page:$page) {
        info {
            count
            pages
            next
            prev
        }
        results {
            id
            name
            species
            image
        }
    }
}`;

export const getChatacterQuery = `
query getCharacter($id:ID!) {
    character(id:$id) {
        id
        name
        status
        species
        image
    }
}`;

export const getChatacterByFilterQuery = `
query getChatacterByFilter($page:Int,$filter:FilterCharacter) {
    characters(page:$page,filter:$filter) {
        info {
            count
            pages
            next
            prev
        }
        results {
            id
            name
            species
            image
        }
    }
}`;