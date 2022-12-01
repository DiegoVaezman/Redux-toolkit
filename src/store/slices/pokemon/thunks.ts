import { AppDispatch, RootState } from '../../store';
import { setPokemons, startLoadingPokemons } from './pokemonSlice'
import { pokemonApi } from '../../../api/pokemonApi';


export const getPokemons = (page = 0) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(startLoadingPokemons());

        const res = await pokemonApi.get(`pokemon?limit=10&offset=${page*10}`);


        dispatch(setPokemons({pokemons: res.data.results, page: page + 1}));
    }
}