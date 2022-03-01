import { useNavigate } from 'react-router-dom';

function HourlyButton() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/hourly")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <button type="submit">24 Hour</button>
            </form>
            <br/>
        </div>
    )
}

export default HourlyButton