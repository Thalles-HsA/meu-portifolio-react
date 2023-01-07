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
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Inventory</li>
                    <li>Portifólio</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}

export default Header