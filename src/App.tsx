import Button from './Button'

const arr = [
  'happy',
  'sad',
  'excited'
]

const App = () => {
  const myVar: boolean = false

  if (myVar) {
    return <p>Mi variable es true</p>
  }

  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      <Button onClick={() => console.log('clicked')}>Enviar</Button>
    </div>
  )
}

export default App