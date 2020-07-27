import React from 'react'
import { Link } from 'react-router-dom'

import logo from '@assets/images/logo.png'

interface ILogoProps {}

const Logo = ({}: ILogoProps) => (
    <Link to='/'>
        <img src={logo} />
    </Link>
)

export default Logo
