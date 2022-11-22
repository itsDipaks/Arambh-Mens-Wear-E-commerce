import React from 'react'
import {Routes,Route} from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard'

export const Alllrouts = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
    </div>
  )
}
