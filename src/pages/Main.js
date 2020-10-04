import React, { useState } from 'react'
import { Card } from '../components/card/Card'
import { Carousel } from '../components/carousel/Carousel'

export const Main = () => {
    const [image] = useState([
        { title: 'Пустая сборка', text:'Обычная теплица без какой либо технической начинки.', path: 'cardImg1.png'},
        { title: 'Средняя сборка', text:'Теплица оснащенная несколькими датчиками.', path: 'cardImg2.png'},
        { title: 'Полная сборка', text:'Теплица оснащенная многими датчиками.', path: 'cardImg3.jpg'}
    ])

    return (
        <>
        <Carousel />
        <div className="main-card">
            <div className="container">
                <div className="row">
                    {image.map((item, i) => { 
                        return (
                            <div className="col-sm-4" key={i}>
                                <Card title={item.title} text={item.text} path={item.path} key={i}/> 
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="container text-center">
            <h2> Особенности нашей теплицы </h2>
            <img src="aboutGreen.jpg" className="about-green" alt="aboutGreean" />
        </div>
        </>
    )
}