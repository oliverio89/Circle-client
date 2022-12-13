import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useContext, useState, useCallback } from 'react'


const containerStyle = {
    width: '600px',
    height: '600px'
};

const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
}




function MyComponent() {

    let center

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDBRsIECfXTj6qsRh0UvGeBZlk0mXu6pd8"
    })



    const [map, setMap] = useState(null)


    navigator.geolocation.getCurrentPosition(
        data => {
            center = {
                lat: data.coords.latitude,
                lng: data.coords.longitude
            }

            const bounds = new window.google.maps.LatLngBounds(center, { lat: 0, lng: 0 })

            map.fitBounds(bounds)

        },
        err => console.log('MAL!!', err)
    )




    const onLoad = useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        console.log(center),
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={OPTIONS}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default MyComponent