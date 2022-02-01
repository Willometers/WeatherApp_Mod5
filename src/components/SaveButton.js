
function SaveButton() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Save")
    }
    // loggedin? post route sign up : post route login && post to location#create
    // state.weather.location = searched location
    // state.location = browser's static physical location

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <button type="submit">Save</button>
            </form>
            <br/>
        </div>
    )
}

export default SaveButton