import { useState, Dispatch, SetStateAction } from 'react'

import { useMount } from 'react-use'

import IAppState from '@models/IAppState'

function useApp(): IAppState {
    const [title, setTitle]: [string, Dispatch<SetStateAction<string>>] = useState('Service')

    useMount(() => {
        console.log('useApp mount')
    })

    return {
        title
    }
}

export default useApp
