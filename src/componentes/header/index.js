import { BoxIconElement } from 'boxicons';
import React from 'react'
import Nike from '../../images/Nike.jpg';
import Cart from '../../images/cart.png';

const Header = () => {
  return (
   <header>
     <a href='#'>
       <div className='logo'>
         <img src={Nike} alt='logo' width="150"></img>
       </div>
     </a>
     <ul>
       <li>
         <a href='#'>INICIO</a>
       </li>
       <li>
         <a href='#'>PRODUCTOS</a>
       </li>
     </ul>
     <div className="cart">
     <img src={Cart} alt='cart' width="45"></img>
      <span className='itemTotal'>0</span>
     </div>
   </header>
  )
}

export default Header
