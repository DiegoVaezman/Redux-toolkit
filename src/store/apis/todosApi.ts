import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface TodoResponse {
    id: string;
    title: string;
    completed: boolean;
}

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query<TodoResponse[], void>({
            query: () => '/todos'
        }),
        getTodoById: builder.query<TodoResponse[], number>({
            query: (todoId) => `/todos/${todoId}`
        }),
    })
})

export const {useGetTodosQuery, useGetTodoByIdQuery} = todosApi;