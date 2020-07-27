import React from 'react'
import ReactDOM from 'react-dom'

import addContainerDeps from '@commons/addContainerDeps'

import AppContainer from '@containers/app'
import AuthContainer from '@containers/auth'
import TodosContainer from '@containers/todos'

import Router from './router'

import '@assets/styles/font.css'
import '@assets/styles/index.less'

import '@commons/i18n'

const Container = addContainerDeps(AppContainer, AuthContainer, TodosContainer)

ReactDOM.render(
    <Container.Provider>
        <Router />
    </Container.Provider>,
    document.getElementById('app')
)
