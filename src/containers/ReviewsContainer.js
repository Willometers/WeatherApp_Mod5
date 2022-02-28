import { useSelector } from "react-redux"
import ReviewShow from "../components/ReviewsShow"

const ReviewsContainer = (id) => {
    
    const skiAreas = useSelector(state => state.skiAreas[0])
    const place = skiAreas.filter((x) => x.id === id.id)

    if(!place[0])
        return (
            <div></div>
        )
    else
        return(
            <div>
                {place[0].reviews.map((review) =>  
                    <ReviewShow review={review}/>)}
            </div>
        )
}

export default ReviewsContainer