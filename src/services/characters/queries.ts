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