import { useState, Dispatch, SetStateAction } from 'react'

import { useMount } from 'react-use'

import Cookies from 'js-cookie'

import IAuthState from '@models/IAuthState'

function useAuth(): IAuthState {
    const [name, setName]: [string, Dispatch<SetStateAction<string>>] = useState('')
    const [token, setToken]: [string, Dispatch<SetStateAction<string>>] = useState('')

    const signIn = (name: string, password: string) =>
        new Promise((resolve: any) => {
            const token: string = 'TOLEN'

            setName(name)
            setToken(token)

            Cookies.set('AUTH_NAME', name)
            Cookies.set('AUTH_TOKEN', token)

            resolve(true)
        })

    const clear = () => {
        setName('')
        setToken('')

        Cookies.remove('AUTH_NAME')
        Cookies.remove('AUTH_TOKEN')
    }

    useMount(() => {
        const { AUTH_NAME, AUTH_TOKEN } = Cookies.get()

        if (AUTH_NAME && AUTH_TOKEN) {
            setName(AUTH_NAME)
            setToken(AUTH_TOKEN)
        }

        console.log('useAuth mount')
    })

    return {
        name,
        token,
        signIn,
        clear
    }
}

export default useAuth
