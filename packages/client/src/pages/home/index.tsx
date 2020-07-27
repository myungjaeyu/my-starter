import React, { Fragment } from 'react'

import MetaTags from 'react-meta-tags'

import IAuthState from '@models/IAuthState'
import ITodosState from '@models/ITodosState'

import AuthContainer from '@containers/auth'
import TodosContainer from '@containers/todos'

import Layout from '@components/Layout'

import TodoForm from '@components/TodoForm'
import TodoList from '@components/TodoList'

import Profile from '@components/Profile'

import TransCard from '@components/TransCard'

import { Button } from 'design-system'

interface IHomeProps {}

const Home = ({}: IHomeProps) => {
    const { token, name }: IAuthState = AuthContainer.useContainer()
    const { todos, add, remove }: ITodosState = TodosContainer.useContainer()

    return (
        <Layout>
            <MetaTags>
                <title>Home - Service</title>
                <meta name='description' content='Home - Service, Description' />
                <meta property='og:title' content='Home - Service, Title' />
                <meta property='og:description' content='Home - Service, Description' />
            </MetaTags>
            <Fragment>
                <TransCard />

                <Button onClick={ () => console.log('button module') }>Test</Button>

                <h1>Home</h1>

                {token && <Profile name={name} />}

                <TodoForm onSubmit={({ todo }) => add(todo)} />
                <TodoList todos={todos} remove={remove} />
            </Fragment>
        </Layout>
    )
}

export default Home
