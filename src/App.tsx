import { Component } from 'react'

class App extends Component {
  state = {}

  render() {
    console.log(this.state)

    return (
      <div>
        <p>Hola Mundo</p>
        <button onClick={() => this.setState({ value: 2 })}>
          Enviar
        </button>
      </div>
    )
  }
}

export default App
