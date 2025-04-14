"use client"

import React, { useState } from 'react'

const Login= () => {
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
  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
  }
  return (
    <div>
      <h1>Log in page</h1>
    <form>
      <input name='email' type='email' placeholder='email' onChange={handleChange} ></input>
      <input name='password' type='password' placeholder='password'  onChange={handleChange}></input>
      <button onClick={handleSubmit} type='submit'>Submit</button>
    </form>
      </div>

  )
}

export default Login