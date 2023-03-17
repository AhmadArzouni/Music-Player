import React, { useEffect, useState } from 'react';
import './sidebar.css';
import Sidebarbutton from './sidebarbutton';
import { AiFillAlert } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { CgFeed } from "react-icons/cg";
import { MdLibraryMusic } from "react-icons/md";
import { IconContext } from 'react-icons';
import apiclient from '../../spotify';




export default function Sidebar() {
  const [image,setimage]=useState("https://picsum.photos/200");
  useEffect(()=>{
    apiclient.get("me").then(response=>{
    console.log(response);})
      },[])
  return (
    <div className='sidebar'>
        <img src={image} className='image'></img>
        <div>
         
        <Sidebarbutton to='/feed' icon={<CgFeed/>} title="Feed"/>
        <Sidebarbutton to='/trending' icon={<AiFillFire/>} title="Trending"/>
        <Sidebarbutton to='/player' icon={<BsFillPlayFill/>} title="Player"/>
        <Sidebarbutton to='/favorites' icon={<AiFillHeart/>} title="Favorites"/>
        <Sidebarbutton to='/Library' icon={<MdLibraryMusic/>} title="Library"/>
        
        </div>
        <div>
        <Sidebarbutton to='/' icon={<ImHome/>} title="Home"/>
        </div>
 
       



    </div>
  )
}
