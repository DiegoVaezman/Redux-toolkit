import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxToolkit';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    const { isLoading, page, pokemons } = useAppSelector(
        (state) => state.pokemons
    );

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>

            <ul>
                {pokemons.map(({ name, url }) => (
                    <li>{name}</li>
                ))}
            </ul>

            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page + 1))}
            >
                Next
            </button>
        </>
    );
};
