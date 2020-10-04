import React from 'react'

export const Download = () => {
    return (
        <div className="download container">
            <h2 className="display-4"> Скачать наше приложение </h2>
            <p> Скачайте наше приложение подключите свой аппаратный комплекс и работайте!</p>
            <img src="forDownload.png" id="img-download" alt="download"/>
            <div className="a-download text-center">
                <a href="https://github.com/EugeneTatarincev/Diplom-both" className="btn-floating btn-lg btn-success btn-down" type="button" role="button"> Скачать </a>
            </div>
        </div>
    )
}