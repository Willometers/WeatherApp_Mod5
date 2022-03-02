import ReviewShow from "../components/ReviewsShow"

const ReviewsContainer = (resort) => {

    if(resort.resort.length < 1)
        return (
            <div>Be the First to Leave a Review</div>
        )
    else
        return(
            <div>
                {resort.resort.reviews.map((review) =>  
                    <ReviewShow review={review}/>)}
            </div>
        )
}

export default ReviewsContainer
