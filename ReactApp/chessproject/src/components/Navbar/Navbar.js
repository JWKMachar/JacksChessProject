import './Navbar.css';

// import React, { useEffect, useState } from "react";


export function Navbar()
{
    let isActive = true;

    return ( 
    <>
        <header>
            <>
                <h3>Jack's Chess Project</h3>
                <select name="AccountName" id="AccountName">
                    <option value="TheBigWunk">TheBigWunk</option>
                    <option value="TheTub1con">TheTub1con</option>
                </select>
            </>


            <>
                <ul id="nav">

                <li><a id="landing" href="/Landing"  className={isActive ? 'active' : ''}>Landing</a></li>
                <li><a id="openings" href="/Openings" className={isActive ? '' : 'active'}>Opening</a></li>


                {/* <li><a id="landing"  onClick={()=> {setIsActive = true}}  href="/Landing" className={isActive ? 'active' : ''}>Landing</a></li>
                <li><a id="openings" onClick={()=> {setIsActive = false}} href="/Openings" className={!isActive ? 'active' : ''}>Opening</a></li> */}

                {/* <li><a id="landing"  onClick={()=> { 
                    isActive = true
                    alert(isActive)
                }} href="/Landing"  className={isActive ? 'active' : ''}>Landing</a></li>
                <li><a id="openings" onClick={()=> { 
                    isActive = false 
                    alert(isActive)
                }} href="/Openings" className={isActive ? '' : 'active'}>Opening</a></li> */}
                
                </ul>
            </>
        </header> 
    </>
    );
}

export default Navbar