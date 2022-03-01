import React from 'react'

class LifecycleComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sample: 'Test'
        }
    }

    componentWillMount(){
        console.log('componentWillMount()')
    }

    componentDidMount(){
        console.log('componentDidMount()')
    }

    updateState(){
        this.setState({sample: 'update test'})
    }

    render(){
        return (
            <>
                <div>
                    <h1>Hello {this.state.sample}</h1>
                </div>
                <div>
                    <h2><p href='#' onClick={this.updateState.bind(this)}>Update title</p></h2>
                </div>
            </>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate()', nextProps, nextState)
        return true
    }

    componentWillUpdate(){
        console.log('componentWillUpdate()')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate()')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount()')
    }
}

export default LifecycleComponent
