import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import {BiHomeAlt2, BiCartAlt} from 'react-icons/bi'
import { useState } from "react";

import '../styles/navbar.css'

function Navbar(){

    const [navbar, setNavbar] = useState('navbar')
    const [menu, setMenu] = useState('navbar-menu')
    const [items, setItems] = useState('navbar-item')

    const mudaClasse = () => {
        setNavbar(navbar == 'navbar' ? 'navbar reduce' : 'navbar')
        setMenu(menu == 'navbar-menu' ? 'navbar-menu-reduced' : 'navbar-menu')
        setItems(items == 'navbar-item' ? 'navbar-item-reduced' : 'navbar-item')
    }

    return(

        <nav className={navbar}> 

         < GiHamburgerMenu className={menu} onClick={mudaClasse}/> 

            <div className="navbar-list ">
                 <Link className={items} to='/'> <BiHomeAlt2 className="navbar-icon"/> <span>Home</span> </Link> 
                 <Link className={items} to='/produtos'> <BiCartAlt className="navbar-icon"/> <span>Produtos</span> </Link> 
            </div>

            

        </nav>
    )
}

export default Navbar