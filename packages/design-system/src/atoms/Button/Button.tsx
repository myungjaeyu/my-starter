import React from 'react'
import classNames from 'classnames'

interface IButtonProps {
    children: any
    className?: string
    /**
     * button theme
     * @default secondary
     */
    theme?: string
    size?: string
    outline?: boolean
    block?: boolean
    squared?: boolean
    onClick?: any
}

const Button = ({ children, className, theme, size, outline, block, squared, onClick }: IButtonProps) => {
    if (!theme) theme = 'secondary'

    const classes = classNames(className && className, 'btn', theme && `btn-${outline ? 'outline-' : ''}${theme}`, size && `btn-${size}`, block && 'btn-block', squared && 'rounded-0')

    const _onClick = (e) => {
        onClick && onClick(e)
    }

    return (
        <button className={classes} onClick={_onClick}>
            {children}
        </button>
    )
}

export default Button
