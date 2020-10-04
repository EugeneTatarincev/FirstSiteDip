import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk } from "@fortawesome/free-brands-svg-icons"

export const AboutCrew = () => {
    return (
        <div className="about-crew container">
            <h1 className="display-4 text-center"> О команде </h1>
            
            <h3 className=""> Сукачев А. И.</h3>
            <p> <strong>Должность:</strong> Старший преподаватель </p>
            <p> Кафедра радиоэлектронных устройств и систем </p>
            <p> Дипломный руководитель проекта </p>
            <p className="p-email"> <strong>E-mail:</strong> something@mail.ru </p>
            <a className="btn-floating btn-lg btn-vk" type="button" role="button" href="https://vk.com/skydmg"> <FontAwesomeIcon icon={faVk} size="lg" /> </a>

            <h3 className=""> Татаринцев Е. С.</h3>
            <p> <strong>Должность:</strong> Студент </p>
            <p> Кафедра радиоэлектронных устройств и систем </p>
            <p> Разработчик программного обеспечения </p>
            <p className="p-email"> <strong>E-mail:</strong> something@mail.ru </p>
            <a className="btn-floating btn-lg btn-vk" type="button" role="button" href="https://vk.com/id79945633"> <FontAwesomeIcon icon={faVk} size="lg" /> </a>

            <h3 className=""> Кондауров К. С.</h3>
            <p> <strong>Должность:</strong> Студент </p>
            <p> Кафедра радиоэлектронных устройств и систем </p>
            <p> Разработчик аппаратного комплекса </p>
            <p className="p-email"> <strong>E-mail:</strong> something@mail.ru </p>
            <a className="btn-floating btn-lg btn-vk" type="button" role="button" href="https://vk.com/kks1197"> <FontAwesomeIcon icon={faVk} size="lg" /> </a>

        </div>
    )
}