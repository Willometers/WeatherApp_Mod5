import { useNavigate } from 'react-router-dom';

function HourlyButton() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hourly")
        navigate("/hourly")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <button type="submit">Hourly</button>
            </form>
            <br/>
        </div>
    )
}

export default HourlyButton