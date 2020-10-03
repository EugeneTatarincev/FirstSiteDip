import React from 'react'

export const Card = ({title, text, path}) => {
    return (
        <div className="card">
            <img src={path} className="card-img-top" alt="img1" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}