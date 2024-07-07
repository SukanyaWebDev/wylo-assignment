import React from 'react'
import './total.css'

export default function Header() {
  return (
    <div className='header'>
      <h1>Posts Library</h1>
      <div className='info'>
        <h2>About US</h2>
        <h2>Contact</h2>
        <button className='header-button' type='button'>Logout</button>
      </div>
      
    </div>
  )
}
