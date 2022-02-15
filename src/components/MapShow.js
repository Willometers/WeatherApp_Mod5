import GoogleMapReact from 'google-map-react'
import LocationPin from 'google-map-react'
import GoogleKey from "../GoogleKey"

const MapShow = (resort) => {
    console.log("mapshow", resort.resort)
    const location = resort.resort

    if(location.length < 1)
        return(
            <div></div>
            )
    else
        return (
            <div className="map">
                <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${GoogleKey}&q=${location}&zoom=8`} allowfullscreen width="800" height="650">
                </iframe>
            </div>

            )
  }

  export default MapShow
