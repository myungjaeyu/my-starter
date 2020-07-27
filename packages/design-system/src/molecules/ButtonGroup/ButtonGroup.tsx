import React from 'react'
import classNames from 'classnames'

interface IButtonGroupProps {
    children: any
    className?: string
    size?: string
}

const ButtonGroup = ({ children, className, size }: IButtonGroupProps) => {
    const classes = classNames(className && className, 'btn-group', size && `btn-group-${size}`)

    return (
        <div className={classes} role='group'>
            {children}
        </div>
    )
}

export default ButtonGroup
