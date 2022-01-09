import { Component } from 'react'

class App extends Component {
  state = {
    value: 3
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <p>Hola Mundo</p>
        <button className={`${this.state.value}`} onClick={() => this.setState({ value: 2 })}>
          Enviar
        </button>
      </div>
    )
  }
}

export default App
