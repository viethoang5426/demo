import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Home() {
    const {user}=useContext(AuthContext)
  return (
    <div>
      Xin chào {user.email}
    </div>
  )
}
