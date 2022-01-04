import './Button.css'

interface buttonProps {
  children: string
  onClick: () => void
}
const Button = (props: buttonProps) => {
  return(
    <button {...props} className='btn'/>
  )
}

export default Button