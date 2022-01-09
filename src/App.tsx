import { ChangeEvent, Component } from 'react'

interface InputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

class Input extends Component<InputProps, {}> {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

interface AppState {
  name: string
  last_name: string
}

class App extends Component<{}, AppState> {
  state = {
    name: '',
    last_name: ''
  }

  updateValues = (prop: string, value: string) => {
    this.setState({ [prop]: value } as Pick<AppState, keyof AppState>)
  }

  render() {
    return (
      <p>
        Nombre completo: { `${this.state.name} ${this.state.last_name}`}
        <Input
          value={this.state.name}
          onChange={e => this.updateValues('name', e.target.value)}
        />
        <Input
          value={this.state.last_name}
          onChange={e => this.updateValues('last_name', e.target.value)}
        />
      </p>
    )
  }
}

export default App
