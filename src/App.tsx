import { Component } from 'react'

class Button extends Component {
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
        <Button />
        <button className={`${this.state.value}`} onClick={() => this.setState({ value: 2 })}>
          Enviar en App
        </button>
      </div>
    )
  }
}

export default App
