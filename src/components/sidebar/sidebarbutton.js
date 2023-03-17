import React from 'react'
import { IconContext } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'
import '../sidebar/sidebarbutton.css'


export default function Sidebarbutton(props) {
  const location=useLocation();
  
  const isactive=location.pathname===props.to;
  const name=isactive ?'btn-active' : 'btn';
  return (
   
    <Link to={props.to}>
      <div className={name}>
       <IconContext.Provider value={{size :'20px'}}>
       {props.icon}
  <p>{props.title}</p> 
       </IconContext.Provider>
      
      
       
       
       
      
   </div> 
   </Link>
   
   
   
  )
}
