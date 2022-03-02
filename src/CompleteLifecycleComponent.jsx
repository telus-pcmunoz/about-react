import React from "react"
import LifecycleComponent from "./LifecycleComponent"

const CompleteLifecycleCompoenent = () => {
    // When show is true it will mount the component
    // When show is fall it will unmount the component
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