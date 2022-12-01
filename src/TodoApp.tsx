import React from 'react';
import { useGetTodosQuery, useGetTodoByIdQuery } from './store/apis';
import { useState } from 'react';

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1);
    const { data: todos, isLoading: isLoadingTodos } = useGetTodosQuery();
    const { data: todo, isLoading: isLoadingTodoById } =
        useGetTodoByIdQuery(todoId);

    const nextTodo = () => {
        setTodoId((prev) => prev + 1);
    };
    const prevTodo = () => {
        todoId > 0 && setTodoId((prev) => prev - 1);
    };

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>isLoadingTodos: {isLoadingTodos ? 'true' : 'false'}</h4>
            <h4>isLoadingTodoById: {isLoadingTodoById ? 'true' : 'false'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prevTodo}>Prev todo</button>
            <button onClick={nextTodo}>Next todo</button>

            <ul>
                {todos &&
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <strong>
                                {todo.completed ? 'Done' : 'Pending'}{' '}
                            </strong>
                            {todo.title}
                        </li>
                    ))}
            </ul>
        </>
    );
};
