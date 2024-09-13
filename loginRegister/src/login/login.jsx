import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const Navigate = useNavigate()

    const login = (e)=>{
        fetch("http://localhost:3000/user")
        .then(res=>res.json())
        .then(users=>{
           let user = users.find(user=>user.userEmail == userEmail && user.userPassword == userPassword)
            console.log(user);
            if(user){
                localStorage.setItem("userId", user.id);
                
                Navigate("/")
            }else{
                alert("error")
            }
            
        })
        e.preventDefault()
    }
  return (
    <div className='login'>
      <form className='form-body' onSubmit={e=>login(e)}>
        <h3 className='login-title'>Login</h3>
        <input type="email" placeholder='User Email' className='login-inputs' onChange={(e)=>setUserEmail(e.target.value)}/>
        <input type="password" placeholder='Password' className='login-inputs' onChange={(e)=>setUserPassword(e.target.value)}/>
        <button className='login-btn'>Login</button>
        <Link to={"/register"} className='register-btn'>Register</Link>
      </form>
    </div>
  )
}

export default Login
