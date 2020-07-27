import React from 'react'
import classNames from 'classnames'

interface ICarouselItemProps {
    className?: string
    active?: boolean
    src: string
    alt: string
}

const CarouselItem = ({ className, active, src, alt }: ICarouselItemProps) => {
    const classes = classNames(className && className, 'carousel-item', active && 'active')

    return (
        <div className={classes}>
            <img src={src} className='d-block w-100' alt={alt} />
        </div>
    )
}

export default CarouselItem
