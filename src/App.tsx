import Button from './Button'

const App = () => {
  const myVar: boolean = true;

  if (myVar) {
    return <p>Mi variable es true</p>
  }

  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
      <Button onClick={() => console.log('clicked')}>Enviar</Button>
    </div>
  )
}

export default App