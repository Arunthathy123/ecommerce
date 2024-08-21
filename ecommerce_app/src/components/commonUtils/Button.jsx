import React from 'react'

const Button = ({type, onClick, className,buttonValue}) => {
  return (
    <>
      <button 
        type={type}
        onClick={onClick}
        className={className}
      >{buttonValue}</button>
    </>
  )
}

export default Button
