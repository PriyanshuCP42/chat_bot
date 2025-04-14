"use client"

import { signup } from '@/services/auth'
import React, { useState } from 'react'

const Signup= () => {
  const[form,setForm]=useState({
    email:'',
    password:'',
  })
  function handleChange(e){
    const fieldName=e.target.name
    const fieldValue=e.target.value
    setForm({
      ...form,
      [fieldName]:fieldValue,
    })
  }
  const handleSubmit=async(e)=>{
    try{
      e.preventDefault()
      const response=await signup({email:form.email,password:form.password})
      console.log(response)
    }
    catch(err){
      console.log(err)
      alert(err)
    }
   
    // console.log(form)
  }
  return (
    <div>
      <h1>Sign Up page</h1>
    <form>
      <input name='email' type='email' placeholder='email' onChange={handleChange}></input>
      <input name='password' type='password' placeholder='password' onChange={handleChange}></input>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
      </div>

  )
}

export default Signup