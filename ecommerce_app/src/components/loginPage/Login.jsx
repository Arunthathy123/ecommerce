import React from 'react'
import '../../assets/LoginStyles/login_styles.css'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    // <div className='bodyClass'>
    //   <LoginForm />
    // </div>
    <div className='bodyClass' >
        <div className='card'>
            <div className='firstPart'>
                <LoginForm />
                 
            </div>
            <div className='secondpart'>
                
            </div>
        </div>
    </div>
  )
}

export default Login
