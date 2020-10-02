import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container foot-right">
                <div className="row">
                    <div className="col-sm">
                        <h4> Сукачев А. И. </h4>
                        <p> Дипломный руководитель </p>
                        <br/>
                        <span><FontAwesomeIcon icon={faEnvelope} /> somethig@mail.ru</span>
                    </div>
                    <div className="col-sm">
                        <h4> Татаринцев Е. С. </h4>
                        <p> Разработчик программного обеспечения</p>
                        <span><FontAwesomeIcon icon={faEnvelope} /> somethig@mail.ru</span>
                    </div>
                    <div className="col-sm">
                        <h4> Кондауров К. С. </h4>
                        <p> Разработчик аппаратного обеспечения</p>
                        <span><FontAwesomeIcon icon={faEnvelope} /> somethig@mail.ru</span>
                    </div>
                </div>
                <hr/>
                <h4 className="h-logo">Greenhouse</h4>
                <a href="#" className="a-git"><FontAwesomeIcon icon={faGithub} size="lg" /> <FontAwesomeIcon icon={faGit} /></a>
            </div>
        </div>
    )
}