import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons"

export const Download = () => {
    return (
        <div className="download container">
            <h2 className="display-4"> Скачать наше приложение </h2>
            <p> Скачайте наше приложение подключите свой аппаратный комплекс и работайте!</p>
            <img src="forDownload.png" id="img-download"/>
            <div className="a-download">
                <span> Скачать -> </span>
                <a href="https://github.com/EugeneTatarincev/Diplom-both" className="down-git"><FontAwesomeIcon icon={faGithub} size="lg" /> <FontAwesomeIcon icon={faGit} /></a>
            </div>
        </div>
    )
}