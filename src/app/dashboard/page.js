"use client"

import React, { useContext } from 'react'
import { AuthContext } from '@/context/auth'

const Dashboard = () => {
    const globalData=useContext(AuthContext)
    const isLoggedIn=globalData.isLoggedIn
    
    if(!isLoggedIn){
        return <>Please Login First</>
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard