import React from 'react'
import Home from './pages/Home/Home'
import Aside from './pages/Aside/Aside'
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/Profile'


const App = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen">
        {/* Sidebar is always present */}
        <Aside />
        
      
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
  )
}

export default App