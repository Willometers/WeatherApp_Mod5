import { useNavigate } from 'react-router-dom';

function HomeButton() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <button type="submit">Current</button>
            </form>
            <br/>
        </div>
    )
}

export default HomeButton