import React from 'react';
import './main.css'
// import './App.css';

interface Props {
  children: string
  state: string
}

const style = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

const style2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.1)'
}

const Li = ({children}: Props) => {
  return (
    <li className='class-li'>{children}</li>
  )
}

const App = () => {
  const value = 'De La Lanza'
  return (
    <ul className="css-class">
      <Li state='happy'>Valor de Li</Li>
    </ul>
  )
}

export default App;
