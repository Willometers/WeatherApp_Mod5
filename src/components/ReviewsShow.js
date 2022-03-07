import { useSelector } from "react-redux"
import { Rating } from '@mui/material';

const ReviewShow = (review) => {
// pass down user from parent

    const allUsers = useSelector(state => state.allUsers[0])
    const user = allUsers.filter((x) => x.id === review.review.user_id)
    const stars = review.review.rating*.1/2
    console.log("ReviewShow", allUsers)

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: ''}}>
            <div class="card border-success mb-3" border="secondary" >
                <div class="card-body text-success">
                <Rating name="read-only" value={stars} readOnly />
                <p class="card-text"> {review.review.comments}</p>
                </div>
                <div class="card-footer bg-transparent border-success">{user.email}</div>
            </div>
        </div>
    )
}

export default ReviewShow