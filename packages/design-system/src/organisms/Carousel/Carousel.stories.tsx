import React from 'react'

import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

const docs = `
#### blah

description blah blah blah blah blah blah blah blah

~~~tsx
import { Carousel, CarouselItem } from 'design-system'
~~~
`

export default {
    title: 'Carousel',
    component: Carousel,
    parameters: { info: { text: docs } }
}

const images = ['https://source.unsplash.com/collection/102/400x300', 'https://source.unsplash.com/collection/103/400x300', 'https://source.unsplash.com/collection/104/400x300']

export const DefaultCarousel = () => (
    <div className='w-50'>
        <Carousel option={{ interval: 200 }}>
            <CarouselItem active src={images[0]} alt='img1' />
            <CarouselItem src={images[1]} alt='img2' />
            <CarouselItem src={images[2]} alt='img3' />
        </Carousel>
    </div>
)
