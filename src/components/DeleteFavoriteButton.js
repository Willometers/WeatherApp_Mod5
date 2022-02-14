import { addErrors } from "../store/actions/weatherActions"
import { useDispatch } from "react-redux"

const DeleteFavoriteButton = (place) => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        // e.preventDefault()
        const id = place.place.id
        console.log("target", place.place.id)
        fetch("delete", {
            method: 'DELETE', 
            headers: {
            'Content-Type' : 'application/json',
                },
            body: JSON.stringify({id: id})
            }).then((res) => {
                if (res.ok) {
                    res.json()
                    console.log("location deleted", res)
                } else {
                    res.json().then((res) => dispatch(addErrors(res)))
                    console.log("error", res.status, res.statusText, res)
                }
            })
    }

                    return (
                        <div>
                            <form onSubmit={handleSubmit} >
                            <button type="submit">Delete</button>
                            </form>
                        <br/>
                       </div>
                        )
}

export default DeleteFavoriteButton
