import React from 'react';
import './App.css';

interface Props {
  children: string
  state: string
}

const Li = ({children}: Props) => {
  return (
    <li className='li'>{children}</li>
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
