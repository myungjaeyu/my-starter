import React from 'react'
import classNames from 'classnames'

import { useMount } from 'react-use'

interface ICarouselProps {
    children: any
    className?: string
    option?: any
}

const Carousel = ({ children, className, option }: ICarouselProps) => {
    const classes = classNames(className && className, 'carousel', 'slide')

    useMount(() => {
        window['$']('.carousel').carousel(option || {})
    })

    return (
        <div className={classes} data-ride='carousel'>
            <div className='carousel-inner'>{children}</div>
        </div>
    )
}

export default Carousel
