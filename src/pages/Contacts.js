import React from 'react'
import { YandexMap } from '../components/yandex-maps/YandexMap'

export const Contacts = () => {
    return (
        <div className="contacts container">
            <h1 className="display-4"> Контакты </h1>
            <p> Рады приветствовать вас на странице контактов </p>
            <p> Наш адрес: г. Воронеж, Московский проспект, 179 </p>
            <p> Телефон института: +7 (473) 243-76-32</p>
            <p> Институт открыт с понедельника по пятницу с 8:00 до 21:45 </p>
            <p> Мы на карте: </p>
            <YandexMap />
            <p id="ps">* На объекте действует пропускная система, поэтому просим заранее сообщать о своем визите.</p>
        </div>
    )
}