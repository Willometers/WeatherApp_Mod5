import GoogleKey from "../GoogleKey"

const MapShow = (resort) => {
    const location = resort.resort

    if(location.length < 1)
        return(
            <div></div>
            )
    else
        return (
            <div className="map">
                <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${GoogleKey}&q=${location}&zoom=8`} allowFullScreen width="700" height="575">
                </iframe>
            </div>

            )
  }

  export default MapShow
