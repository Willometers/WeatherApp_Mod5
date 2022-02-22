

const ReviewShow = (review) => {

    console.log("rev show", review)
    return (
        <div>
           <h1>{review.review.comments}</h1> 
        </div>
    )
}

export default ReviewShow