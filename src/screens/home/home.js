import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from '../../auth/login';
import Sidebar from '../../components/sidebar/sidebar';
import { setclienttoken } from '../../spotify';
import Favorites from '../favorites/favorites';
import Feed from '../feed/feed';
import Library from '../library/library';
import Player from '../player/player';
import Trending from '../trending/trending';
import './home.css';




export default function Home() {
    const [token,settoken]=useState("");
useEffect(()=>{

   const token=window.localStorage.getItem("token");
    const hash=window.location.hash;
    window.location.hash="";

    if(!token && hash){

        const _token=hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token",_token);
        console.log(_token);
        settoken(_token);
        setclienttoken(_token);




    }
    
else{
    settoken(token);
    setclienttoken(token);
    console.log("ahmad");
}


}
    ,[]);
    


   

  return  (!token?
  <Login/>:
    
        <Router>
            
             <div className='main-body'>
               
                
         <Sidebar/>
            <Switch>
                <Route exact path={'/'}>
                    <Library />
                </Route>
                <Route path={'/feed'}>
                    <Feed />
                    
                </Route>
                <Route path={'/trending'}>
                    <Trending />
                </Route>
                <Route path={'/player'}>
                    <Player />
                </Route>
                <Route path={'/favorites'}>
                    <Favorites />
                </Route>
                <Route path={'/Library'}>
                    <Library />
                </Route>
  




  </Switch>
</div>
        </Router>
    
    
  )
}
