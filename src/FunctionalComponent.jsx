import React from "react"

const FunctionalComponent = (props) => {
    const { sample } = props

    const [count, setCount] = React.useState(0)

    const handleClick = (event) => {
        console.log(event)
        setCount(prev => prev + 1)
    }

    return (
        <>
            <div>Passed Sample Property: {sample}</div>
            <div>Count is {count}</div>
            <div><button onClick={handleClick}>Click Me</button></div>
        </>
    )
}

export default FunctionalComponent
