import React from 'react'
// import { TextField } from '@mui/material';

const InputField = ({label, type,value, placeholder,className, onChange, onFocus}) => {
  return (
    <div className="input-field">
       <label>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        onFocus={onFocus}
      />
       
    </div>
  )
}

export default InputField
