import React from 'react'

const Button = ({type, onClick, className,buttonValue}) => {
  return (
    <div>
      <button 
        type={type}
        onClick={onClick}
        className={className}
      >{buttonValue}</button>
    </div>
  )
}

export default Button
