
function SaveButton() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Save")
    }
    // loggedin? post route sign up : post route login && post to location#create

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