import { useSelector } from "react-redux"

    const ErrorShow = () => {

        const state = useSelector(state => state)

        if(state.weather[1])
                console.log("errorshow", state.weather[1].error)



        if(state.weather[1])
        return (
            <div>
                <h1 style={{color:'red'}}>{state.weather[1].error.map((err) => 
                    <h8>{err}</h8>
                    )}
                </h1>
                <br/>
            </div>
        )
        else 
            return (
            <div>
                <p>No errors</p>
            </div>
            )
    }  

    export default ErrorShow
    