import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'



const items = [
  {
    src: 'forCar1.jpg',
    altText: ' ',
    caption: ' ',
    header: ' ',
    key: '1'
  },
  {
    src: 'forCar2.jpg',
    altText: ' ',
    caption: ' ',
    header: ' ',
    key: '2'
  },
  {
    src: 'forCar3.png',
    altText: ' ',
    caption: ' ',
    header: ' ',
    key: '3'
  }
]

export const Carousel = () => <UncontrolledCarousel items={items} />
