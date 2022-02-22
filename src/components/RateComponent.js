import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addErrors } from "../store/actions/weatherActions"

const RateComponent = (resort) => {

    const user_info = useSelector(state => state.location)
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")
    const dispatch = useDispatch()

    const handleRating = (e) => {
        setRating(e)
    }

    console.log("ski area", resort)

    const handleSubmit = (e) => {
        let user = user_info[0].id
        let ski_area_id = resort.resort.id
        let stars = rating
        let comments = review
        e.preventDefault()
        fetch("savereview", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                user_id: user,
                ski_area_id: ski_area_id,
                rating: stars,
                comments: comments
            })
        }).then((res) => {
            if (res.ok) {
                res.json()
                console.log("review saved", res)
            } else {
                res.json().then((res) => dispatch(addErrors(res)))
                console.log("error", res.status, res.statusText)
        }
        })
}

    const handleChange = (e) => {
        console.log(e.target.value)
        setReview(e.target.value)
    }

    console.log("rating:", resort.resort)

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Review:</label>
                <br/>
            <textarea onChange={handleChange} />
                <br/>
            < Rating
                onClick={handleRating}
                size={20}
                label
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo' // Will remove the inline style if applied
                />
                <br/>
                <br/>
            <button >Submit</button>
            </form >
                <br/>
                <br/>
            </div>
    )
}

export default RateComponent