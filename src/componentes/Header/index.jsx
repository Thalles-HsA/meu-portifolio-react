import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import './Header.css'

const menu = ['Home', 'Sobre', 'Inventory', 'Portifolio', 'Contato']

const Header = () => {


    return (
        <div className='header'>
            <div className='header-titulo'>
                <Logo />
                <h1>Thalles Herique</h1>
            </div>
            <div>
                <ul className='header-menu'>
                    {menu.map(item => {

                        if (item === "Home") {
                            return <li><NavLink to="/">{item}</NavLink></li>
                        } else {
                            return <li><NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink></li>
                        }

                    })}
                </ul>
            </div>
        </div>
    )
}



export default Header