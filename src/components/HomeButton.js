import { useNavigate } from 'react-router-dom';

function HomeButton() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Home')
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <button type="submit">Home</button>
            </form>
            <br/>
        </div>
    )
}

export default HomeButton