import './Navbar.css';
import Dropdown from './Dropdown/Dropdown';

export function Navbar()
{

    return ( 
    <>
        <header>
            <>
                <img src="logo-32.png"></img>
                <h3>Jack's Chess Project</h3>

                <Dropdown />
                {/* <select name="AccountName" id="AccountName">
                    <option value="TheBigWunk">TheBigWunk</option>
                    <option value="TheTub1con">TheTub1con</option>
                </select> */}
            </>


            <>
                <ul id="nav">
                <li><a id="landing" href="/Landing"   >Landing</a></li>
                <li><a id="openings" href="/Openings" >Opening</a></li> 
                </ul>
            </>
        </header> 
    </>
    );
}

export default Navbar