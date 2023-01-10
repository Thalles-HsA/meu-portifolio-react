import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <div className='header-titulo'>
                <img src='/img/Group.png' alt='Logo Thalles Dev'/>
                <h1>Thalles Herique</h1>
            </div>
            <div >
                <ul className='header-menu'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sobre">Sobre</NavLink></li>
                    <li><NavLink to="/Inventory">Inventory</NavLink></li>
                    <li>Portifolio</li>
                    <li>Contat</li>
                </ul>
            </div>
        </div>
    )
}

export default Header