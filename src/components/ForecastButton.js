import { useNavigate } from 'react-router-dom';

function ForecastButton() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("forecast")
        navigate("/forecast")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <button type="submit">Forecast</button>
            </form>
            <br/>
        </div>
    )
}

export default ForecastButton