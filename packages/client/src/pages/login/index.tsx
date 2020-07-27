import React, { Fragment } from 'react'

import MetaTags from 'react-meta-tags'

import IAuthState from '@models/IAuthState'
import AuthContainer from '@containers/auth'

import LoginForm from '@components/LoginForm'

import { Redirect } from 'react-router-dom'

interface ILoginProps {}

const Login = ({}: ILoginProps) => {
    const { token, signIn }: IAuthState = AuthContainer.useContainer()

    return (
        <Fragment>
            <MetaTags>
                <title>Login - Service</title>
                <meta name='description' content='Login - Service, Description' />
                <meta property='og:title' content='Login - Service, Title' />
                <meta property='og:description' content='Login - Service, Description' />
            </MetaTags>
            <h1>Login</h1>

            {token ? <Redirect to='/' /> : <LoginForm onSubmit={({ name, password }) => signIn(name, password).then((e) => alert(`Hi, ${name}`))} />}
        </Fragment>
    )
}

export default Login
