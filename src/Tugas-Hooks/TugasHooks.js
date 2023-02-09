import { useEffect, useRef, useState } from "react";

function TugasHooks({seconds}) {
    const [countdown, setCoundown] = useState(seconds)
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCoundown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])
    
    useEffect (() => {
        if (countdown <= 0) {
            clearInterval(timerId.current)
        }
    }, [countdown])
    console.log (countdown);
    return(
        <h2>
            Countdown : {countdown}
        </h2>
    )
}

export default TugasHooks;