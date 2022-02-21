import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const RateComponent = (resort) => {

    const [rating, setRating] = useState(0)

    const handleRating = (e) => {
        console.log(e)
        setRating(e)
    }

    console.log("rating:", resort.resort)
    console.log(rating*.1)

    return (
        <div>
            < Rating
            onClick={handleRating}
            // ratingValue={rating}
            size={30}
            label
            transition
            fillColor='orange'
            emptyColor='gray'
            className='foo' // Will remove the inline style if applied
            />
            <br/>
            <h5>{rating*.1/2}</h5>
            <br/>
            <br/>
            </div>
    )
}

export default RateComponent