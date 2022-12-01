import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, PayloadActionSetPokemons } from '../../../interfaces/pokemonInterfaces';

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        page: 0,
        pokemons: [] as Pokemon[],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true
        },
        setPokemons: (state, action: PayloadAction<PayloadActionSetPokemons>) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;