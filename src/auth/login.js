import React from 'react';
import { endpointlogin } from '../spotify';
import './login.css';

import '../shared/globalestyles.css';


export default function Login() {
  return (
    
    <div className='content'>
        
       
        <a href={endpointlogin} >
        
        <div className='login'>
       <b> Login</b>
       </div>
        </a>
        
        </div>
  )
}
