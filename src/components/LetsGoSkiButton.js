import { useNavigate } from "react-router-dom"

function LetsGoSkiButton() {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("lets ski", e.target)
        navigate("/goski")
    }

        return (
            <div>
                <form onSubmit={handleSubmit} >
                <button type="submit">Lets Ski</button>
            </form>
        <br/>
       </div>

        )
}

export default LetsGoSkiButton