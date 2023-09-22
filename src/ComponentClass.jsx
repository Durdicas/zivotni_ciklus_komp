import { Component } from 'react'

export default class ComponentClass extends Component {
  constructor(props) {
    super(props)
        console.log("constructor")
    this.state = {
        count: 0
    }
  }
  componentDidMount() {
    console.log("ComponentDidMount")
    this.myVar = setInterval (() => (console.log('bop')), 1000);
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate")
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount")
    clearInterval(this.myVar);
  }
  render() {
        console.log("render")
        return (
                <>
                    <div>ComponentClass</div>
                    <div>{this.state.count}</div>
                    <button onClick={() => this.setState({count: this.state.count + 1})}>Change State </button>
                </>
    )
  }
}
