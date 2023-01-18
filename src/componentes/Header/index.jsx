import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <div className='header-titulo'>
                <Logo />
                <h1>Thalles Herique</h1>
            </div>
            <div >
                <ul className='header-menu'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sobre">Sobre</NavLink></li>
                    <li><NavLink to="/Inventory">Inventory</NavLink></li>
                    <li>Portifolio</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}

export default Header