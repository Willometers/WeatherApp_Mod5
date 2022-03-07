import { useSelector } from "react-redux"
import { Rating } from '@mui/material';

const ReviewShow = (review) => {

    console.log("reviews", review)
    const stars = review.review.rating*.1/2

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: ''}}>
            <div class="card border-success mb-3" border="secondary" >
                <div class="card-body text-success">
                <Rating name="read-only" value={stars} readOnly />
                <p class="card-text"> {review.review.comments}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ReviewShow