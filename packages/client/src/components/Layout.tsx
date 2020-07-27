import React, { Fragment } from 'react'

import Header from '@components/header'

interface ILayoutProps {
    children: any
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <Fragment>
            <Header />

            {children}
        </Fragment>
    )
}

export default Layout
