import React from 'react'
import { YMaps, Map, Placemark } from "react-yandex-maps"

export const YandexMap = () => {
    const mapData = {
        center: [51.757076, 39.184629],
        zoom: 10,
    }

    const coordinates = [
        [51.757076, 39.184629]
    ]

    return (
        <YMaps>
            <Map defaultState={mapData}> 
                {coordinates.map((coordinate, i) => <Placemark geometry={coordinate} key={i} />)}
            </Map>
      </YMaps>
    )
}