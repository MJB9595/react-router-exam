import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
  return (
    <header>
        <div className="inner">
            <h1>TITLE</h1>
            <nav>
                <NavLink to="/"><p>홈</p></NavLink>
                <NavLink to="/todo"><p>todo List</p></NavLink>
                <NavLink to="/about"><p>소개</p></NavLink>
                <NavLink to="/board"><p>게시판</p></NavLink>
                <NavLink to="/company"><p>회사</p></NavLink>
            </nav>
            
        </div>
    </header>
  )
}

export default Header
