import React, { useState } from 'react'
import arrowUp from './images/icon-arrow-up.svg';
import arrowDown from './images/icon-arrow-down.svg';
import calender from './images/icon-calendar.svg';
import reminder from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';
//import {  Outlet } from 'react-router-dom';
//import LoginForm from './LoginForm';


function NavBar() {

  const [isClicked, setIsClicked]=useState(true)
  function handleClick(){
    setIsClicked(prevState=> !prevState)
  }
 

  
  return (
   <nav>
    <div className='strong'>  <strong> Snap </strong> </div>
    <div className='main--body'>
    <div>
    <div onClick={handleClick}>
     Features 
    {isClicked ? <img src={arrowUp} alt=''/>: <img src={arrowDown} alt=''/>}
    </div>
   {!isClicked &&  <div className='off-white' >
      <li>
    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/></svg>
  <span>   To do List </span>
      </li>
      <li>
        <img src={calender} alt=''/>
        <span> Calender </span>
        </li>
        <li>
        <img src={planning} alt=''/>
        <span> Planning </span>
        </li>
        <li>
        <img src={reminder} alt=''/>
        <span> Reminder </span>
        </li>
    </div>}
    </div>

    <div>
    <div onClick={handleClick}>
   Company 
    {isClicked ? <img src={arrowUp} alt=''/>: <img src={arrowDown} alt=''/>}
    </div>
   {!isClicked &&  <div className='off-white'>
      <li>
        <span>   History  </span>
      </li>

      <li>
         <span> Our team </span>
       </li>
        <li>
         <span> Blog </span>
        </li>
    </div>}
    </div>
    <div>
    Careers 
    </div>
    <div>
      About us
    </div>
    </div>
    <div className='right'>
    <div>
       <button className='register--btn'>  Register </button>
    </div> 
      <div>
         <button className='login--btn'> Login </button></div>
     </div>
    

   </nav>
  )
}

export default NavBar;
