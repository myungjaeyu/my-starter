import React from 'react'

import Button from '@components/atoms/Button'

interface ITodoListProps {
    todos: string[]
    remove: (index: number) => void
}

const TodoList = ({ todos, remove }: ITodoListProps) => (
    <ul>
        {todos.map((e, i) => (
            <li key={i}>
                {e}
                <Button onClick={() => remove(i)} className='ml-2'>
                    <i className='fas fa-times'></i>
                </Button>
            </li>
        ))}
    </ul>
)

export default TodoList
