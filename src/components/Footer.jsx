import React from 'react'
import './styles/Footer.css'
import { snsLinks } from '../data/sns'

const Footer = () => {
  return (
    <footer>
        <div className='inner'>
            <h3>title</h3>
            <ul className='sns-Links'>
                {snsLinks.map((s)=>(
                    <li key={s.id}>
                        <a href="{s.url">
                            {s.name}
                            <img src={s.icon} alt={s.name}/>
                            </a>
                        </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer
