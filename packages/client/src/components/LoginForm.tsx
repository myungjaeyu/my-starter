import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@components/atoms/Button'

interface ILoginFormProps {
    onSubmit: any
}

const LoginForm = ({ onSubmit }: ILoginFormProps) => {
    const { register, handleSubmit } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' name='name' placeholder='name' defaultValue='myungjaeyu' ref={register({ required: true })} />

            <br />

            <input type='password' name='password' placeholder='password' ref={register({ required: true })} />

            <Button type='submit' className='d-block mt-2 ml-2'>
                Login
            </Button>
        </form>
    )
}

export default LoginForm
