import React from 'react'
import { Link } from 'react-router-dom'

import IAuthState from '@models/IAuthState'
import AuthContainer from '@containers/auth'

import Logo from '@components/atoms/Logo'
import Button from '@components/atoms/Button'

interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
    const { token, clear }: IAuthState = AuthContainer.useContainer()

    return (
        <header>
            <h1>
                <small>
                    <Logo />
                </small>
                Header
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>{token ? <Button onClick={clear}>Sign out</Button> : <Link to='/login'>Login</Link>}</li>
            </ul>
        </header>
    )
}

export default Header
