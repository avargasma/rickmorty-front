export interface CharacterType {
    id: string;
    name: string;
    species: string;
    status: string;
    image: string;
}

export interface Info {
    count: number;
    pages: number;
    next: number;
    prev: number;
}

export interface CharactersData {
    info: Info | null;
    results: CharacterType[];
}