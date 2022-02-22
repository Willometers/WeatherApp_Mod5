import { useSelector } from "react-redux"

const ReviewShow = (review) => {

    const allUsers = useSelector(state => state.allUsers[0])
    const user = allUsers.filter((x) => x.id === review.review.user_id)

    return (
        <div>
           <h1>Review: {review.review.comments}</h1> 
           <h1>Rating: {review.review.rating*.1/2} stars</h1>
           <h2>User: {user[0].email}</h2>
        </div>
    )
}

export default ReviewShow