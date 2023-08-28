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
query getCharacters($id:ID!) {
    character(id:$id) {
        id
        name
        status
        species
        image
    }
}`;