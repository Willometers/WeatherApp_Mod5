import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ReviewShow from "../components/ReviewsShow"

const ReviewsContainer = (id) => {

    const skiAreas = useSelector(state => state.skiAreas[0])
    const place = skiAreas.filter((x) => x.id === id.id)
    console.log("filtered area", place[0].reviews)

    return(
        <div>
            {place[0].reviews.map((review) =>  
                <ReviewShow review={review}/>)}
        </div>
    )
}

export default ReviewsContainer