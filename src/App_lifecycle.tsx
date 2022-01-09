import { Component } from 'react'
interface ButtonProps {
  emotion: string
}

interface ButtonState {
  prop?: number
}

class Button extends Component<ButtonProps, ButtonState> {
  state = {}

  constructor(props: ButtonProps) {
    super(props)
    console.log('constructor', props)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps: ButtonProps, prevState: ButtonState) {
    console.log('componentDidUpdate', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('unmouting component', this.props, this.state)
  }

  render() {
    console.log('Executing button render method')

    return(
      <button onClick={() => this.setState({ prop: 1})}>Enviar</button>
    )
  }
}

class App extends Component {
  state = {
    value: 3
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <p>Hola Mundo</p>
        {this.state.value === 3 ? <Button emotion="happy"/> : null }
        <button className={`${this.state.value}`} onClick={() => this.setState({ value: 2 })}>
          Enviar en App
        </button>
      </div>
    )
  }
}

export default App
