import React from 'react'

const Header = (params) => {
  return (
    <header className='TodoHeader'>
        <h3>오늘은 📆</h3>
        <h1 style={{color: 'rgb(37, 147, 255)'}}>{new Date().toDateString()}</h1>
    </header>
  )
}

export default Header
