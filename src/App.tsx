import { Component } from 'react'
interface ButtonProps {
  emotion: string
}

class Button extends Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props)
    console.log('constructor', props)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('Executing button render method')

    return(
      <button>Enviar</button>
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
        <Button emotion='happy' />
        <button className={`${this.state.value}`} onClick={() => this.setState({ value: 2 })}>
          Enviar en App
        </button>
      </div>
    )
  }
}

export default App
