import React from "react"
import LifecycleComponent from "./LifecycleComponent"

const CompleteLifecycleCompoenent = () => {
    const [show, setShow] = React.useState(true)

    const handleClick = () => {
        setShow(prev => !prev)
    }

    return (
        <>
            {show && <LifecycleComponent />}
            <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
        </>
    )
}

export default CompleteLifecycleCompoenent