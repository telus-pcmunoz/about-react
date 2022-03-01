import React from "react"

class ClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { count: 0}
    }

    handleClick(event){
        console.log(event)
        this.setState({ count: this.state.count + 1})
    }

    render(){
        return (
            <React.Fragment>
                <div>Passed Sample Property: {this.props.sample}</div>
                <div>Count is {this.state.count}</div>
                <div><button onClick={this.handleClick.bind(this)}>Click Me</button></div>
            </React.Fragment>
        )
    }
}

export default ClassComponent
