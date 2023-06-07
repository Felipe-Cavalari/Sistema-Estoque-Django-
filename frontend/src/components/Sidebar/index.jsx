//Importando extensões
import {BiChevronRight, BiHomeAlt, BiBell, BiLogOut, BiSun, BiMoon, BiCartAlt, BiBarChart, BiUser} from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
//Importando estilos
import './style.css'


export const Sidebar = () => {

const body = document.querySelector('body')

const [sidebar, setSidebar] = useState('sidebar')

const [mode, setMode]  = useState('Dark Mode')

    return(
        <nav className={sidebar}>
        <header>
            <div className="image-text">
              <span className="image">
                <img src={`Foto de usuário`} alt="user-foto" />
              </span>

              <div className="text header-text">
                <span className="name">Felipe Cavalari</span>
                <div className="profession">Software Engineer</div>
              </div>

              <BiChevronRight className='toggle' onClick={() => {sidebar === 'sidebar' ? setSidebar('sidebar close') : setSidebar('sidebar')}}/>
            </div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/">
                  <BiHomeAlt className='icon' />
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/vendas">
                  <BiBarChart className='icon'/>
                  <span className="text nav-text">Vendas</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/produtos">
                  <BiCartAlt className='icon'/>
                  <span className="text nav-text">Produtos</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/usuarios">
                  <BiUser className='icon'/>
                  <span className="text nav-text">Usuarios</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link href="">
                  <BiBell className='icon'/>
                  <span className="text nav-text">Notificações</span>
                </Link>
              </li>

            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a href="">
                <BiLogOut className='icon'/>
                <span className="text nav-text">Sair</span>
              </a>
            </li>
            <li className='mode'>
              <div className="moon-sun">
                  <i><BiSun className='icon sun'/></i>
                  <i><BiMoon className='icon moon'/></i>
                </div>
                <span className="mode-text text">{mode}</span>

                <div className="toggle-switch" onClick={() => {
                  body.classList.toggle('dark')
                  mode === 'Dark Mode' ? setMode('Light Mode') : setMode('Dark Mode')
                }}>
                  <span className="switch"></span>
                </div>
            </li>
          </div>
        </div>
    </nav>
    )
}
