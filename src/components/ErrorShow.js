import { useSelector } from "react-redux"

    const ErrorShow = () => {

        const state = useSelector(state => state.weather)
        // console.log("errorshow", state[1].error.message)

            if(state[1])
            return (
                <div>
                    <br/>
                    <h5 style={{color:'red'}}>{state[1].error.message}</h5>
                    <br/>
                </div>
                )
            else
            return(
                <div>

                </div>
            )

// no superfluous return
    }  

    export default ErrorShow
    