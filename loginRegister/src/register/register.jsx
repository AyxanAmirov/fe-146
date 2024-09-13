import React, { useState } from 'react'
import "../login/login.css"
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const registerUser = ()=>{
        if(userName && userPassword && userEmail){
            fetch("http://localhost:3000/user",{
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({userName,userEmail,userPassword})
            })
        }else{
            alert("error")
        }
        
    }
  return (
    <div className='login'>
      <form className='form-body' onSubmit={registerUser}>
        <h3 className='login-title' >Register</h3>
        <input type="text" placeholder='User Name' className='login-inputs' onChange={(e)=>setUserName(e.target.value)}/>
        <input type="email" placeholder='User Email' className='login-inputs' onChange={(e)=>setUserEmail(e.target.value)}/>
        <input type="password" placeholder='Password' className='login-inputs' onChange={(e)=>setUserPassword(e.target.value)}/>
        <button className='login-btn'>Register</button>
        <Link to={"/login"} className='register-btn'>Login</Link>
      </form>
    </div>
  )
}

export default Register
