import React from 'react'

const Button = (props) => {
    const { children, className, ...args } = props

    return (
        <button {...args} className={`btn btn-light btn-sm${className ? ' ' + className : ''}`}>
            {children}
        </button>
    )
}

export default Button
