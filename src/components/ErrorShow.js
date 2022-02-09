import { useSelector } from "react-redux"

    const ErrorShow = () => {

        const state = useSelector(state => state)

        if(state.weather[1])
            if(state.weather[1].length = 1)
            return (
                <div>
                    <h1 style={{color:'red'}}>{state.weather[1].error.map((err) => 
                            <h12>{err} </h12>
                        )}
                    </h1>
                    <br/>
                </div>
                )
            else
            return (
                <div>
                    <h1>multiple errors</h1>
                    <br/>
                </div>
            )
        else
                return (
                <div>
                </div>
                )
    }  

    export default ErrorShow
    