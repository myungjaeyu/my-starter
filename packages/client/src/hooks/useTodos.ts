import { useState, Dispatch, SetStateAction } from 'react'

import { useMount } from 'react-use'

import ITodosState from '@models/ITodosState'

function useTodos(): ITodosState {
    const [todos, setTodos]: [string[], Dispatch<SetStateAction<string[]>>] = useState([])

    const add = (text: string) => setTodos(todos.concat([text]))

    const remove = (index: number) => setTodos(todos.filter((_, i) => i !== index))

    useMount(() => console.log('useTodos mount'))

    return {
        todos,
        add,
        remove
    }
}

export default useTodos
