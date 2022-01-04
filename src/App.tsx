import Button from './Button'

const App = () => {
  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
      <Button onClick={() => console.log('clicked')}>Enviar</Button>
    </div>
  )
}

export default App