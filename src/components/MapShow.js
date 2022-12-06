// import GoogleKey from "../GoogleKey"

const MapShow = (resort) => {
    const location = resort.resort

    if(!resort.resort)
        return(
            <div></div>
            )
// no superfluous return
    else
        return (
            <div className="map">
                <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GoogleKey}&q=${location}&zoom=8`} allowFullScreen width="700" height="575">
                </iframe>
            </div>

            )
  }

  export default MapShow
