import { useState } from "react"


function TugasIntroReact() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time)
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime, 1000);

    return (
        <h1>
            Now At - {currentTime}
        </h1>
    )
}
export default TugasIntroReact;
