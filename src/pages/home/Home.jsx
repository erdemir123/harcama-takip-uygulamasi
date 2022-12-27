import React from 'react'
import { useSelector } from 'react-redux'
import "./home.module.css"

const Home = () => {
    const {user} = useSelector((state)=>state.auth)
    
  return (
    <div>
      {user.username}
      {user.email}
    </div>
  )
}

export default Home
