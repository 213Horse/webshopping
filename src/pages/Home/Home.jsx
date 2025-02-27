 import React from 'react';
import Policies from './components/Policies/Policies';
 import "./Home.css"
import Collab from './components/Collab/Collab';
import Underwear from './components/Underwear/Underwear';
import Bra from './components/Bra/Bra';
 const Home = () => {
    return (
        <div className='home'>
            <img className='h-auto' src="https://theme.hstatic.net/200000726923/1001091202/14/slider_1_master.jpg?v=655" alt="" /> 
            <div className='home-content'>
            <Policies></Policies>
            <Collab></Collab>
            <Underwear></Underwear>
            <Bra></Bra>
            </div>
        </div>
    );
 };
 
 export default Home;