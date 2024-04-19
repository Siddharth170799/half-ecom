import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adduser } from './Slice'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [data,setData]=useState([])

    const [username,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    let [id,setId]=useState(0)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    
const new1={
    username:username,
    email:email,
    password:password,
    id:id

}
const submit=(e)=>{
    e.preventDefault()
    setData(new1)
    dispatch(adduser(new1))
    setId(id++)
    navigate("/SignIn")
    

    
}
  return (
    <div>
      <div class="signup-container">
    <h2>Sign Up</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required onChange={(e)=>{
            setUserName(e.target.value)
        }}/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" required onChange={(e)=>{
            setEmail(e.target.value)
}}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
      </div>
      <div class="form-group">
        <button type="submit" onClick={submit}>Sign Up</button>
      </div>
    </form>
    <p>Already have an account? <a href="#">Log In</a></p>
  </div>
    </div>
  )
}

export default SignUp
