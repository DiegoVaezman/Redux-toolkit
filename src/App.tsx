import reactLogo from './assets/react.svg';
import './App.css';
import { useAppSelector, useAppDispatch } from './hooks/reduxToolkit';
import {
    decrement,
    increment,
    incrementByAmount,
} from './store/slices/counter';

function App() {
    const { counter } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <div className='App'>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src='/vite.svg' className='logo' alt='Vite logo' />
                </a>
                <a href='https://reactjs.org' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>count is {counter}</h1>
            <div className='card'>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(2))}>
                    Increment by 2
                </button>
            </div>
        </div>
    );
}

export default App;
