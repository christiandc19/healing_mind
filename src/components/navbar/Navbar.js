import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import {AiFillCaretDown } from "react-icons/ai";
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo-2.png'
import logoIcon from '../../assets/nav-logo-icon.png'
import nasal from '../../assets/nasal.png'
import { RiMenu3Line } from "react-icons/ri";

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }




    return (
        <>
        <div className='navbar' name="top">

            <div className='nav-box '>

                <div className="navbar-logo">
                    <Link to='/'>
                            <img src={logo}  alt="Healing Mind" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Services <AiFillCaretDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <div className='nav-main-flex'>
                                <div className='sub-flex'>
                                    <div className='sub-flex-left'>
                                        <img src={logoIcon} alt="tms" loading="lazy"/>
                                    </div>
                                    <div className='sub-flex-right'>
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/tms-therapy`}> TMS Therapy</NavLink> 
                                        <p>FDA-cleared, non-medication depression treatment</p>
                                        </li>
                                    </div>
                                </div>

                                <div className='sub-flex'>
                                    <div className='sub-flex-left'>
                                        <img src={nasal} alt="nasal esketemine" loading="lazy"/>
                                    </div>
                                    <div className='sub-flex-right'>
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/nasal-esketamine`}> Nasal Esketamine</NavLink> 
                                        <p>FDA-cleared, non-medication depression treatment</p>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </li>


                    <li><Link to='/about-us'>About Us</Link> </li>

                    <li><Link to='/insurance'>Insurance</Link></li>
                    <li><Link to='/faq'>FAQs</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<RiMenu3Line className='icon' />) : (<FaTimes className='icon' />)}
                </div>

            </div>

        </div>
        </>
    )
   
}

export default Navbar

