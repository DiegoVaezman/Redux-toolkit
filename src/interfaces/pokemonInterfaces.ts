export interface Pokemon {
    name: string;
    url: string;

}

export interface PayloadActionSetPokemons {
    page: number;
    pokemons: Pokemon[];
}