import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@components/atoms/Button'

interface ITodoFormProps {
    onSubmit: any
}

const TodoForm = ({ onSubmit }: ITodoFormProps) => {
    const { register, handleSubmit, setValue } = useForm()

    return (
        <form
            onSubmit={handleSubmit((values) => {
                onSubmit(values)
                setValue('todo', '')
            })}
        >
            <input type='text' name='todo' placeholder='Todo...' ref={register({ required: true })} />

            <Button type='submit' className='ml-2'>
                Add
            </Button>
        </form>
    )
}

export default TodoForm
