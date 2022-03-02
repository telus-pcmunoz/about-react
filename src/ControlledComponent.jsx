import React from 'react'

const ControlledComponent = () => {
    const [input, setInput] = React.useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <div>Controlled Input: {input}</div>
            <div><input onChange={handleChange} value={input}/></div>
        </>
    )
}

export default ControlledComponent