import "./Sobre.css"
import './Home.css'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import AnimatedTypingComponent from '../../componentes/Digitando'
import Header from '../../componentes/Header/Header';
import Techs from '../../componentes/Techs/Techs';
import Logo from "../../componentes/Logo/Logo";

const Home = () => {

    return (
        <>
            <Header/>
            <section className='home'>
                <div >
                    <div>
                        <p>Olá, eu sou</p>
                        <AnimatedTypingComponent />
                        <p>Seja bem-vindo(a) ao meu portifólio website</p>
                    </div>

                    <div className='home-botao'>
                        <NavLink to="/sobre">Saiba mais sobre mim</NavLink>
                    </div>

                    <div className='home-icons'>
                        <a href='https://github.com/Thalles-HsA' target='_blank' rel="noreferrer"><FaGithub/></a>
                        <a href='https://www.linkedin.com/in/thalleshsa/' target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
                    </div>
                </div>
                <div className='home-imagem'>
                    <img src='/img/home.jpg' alt='Computador' className='home-imagem--principal' />
                    <img src='/img/engrenagemLaranja.png' alt='Computador' className='home-imagem--laranja'/>
                    <img src='/img/engrenagemRoxa.png' alt='Computador' className='home-imagem--roxa'/>
                </div>
            </section>
            
            <section className='sobre'>
                <div className="sobre-container">
                    <Logo />
                    <h3>Thalles Henrique</h3>
                    <p className="sobre-paragrafo">Atualmente cursando o 2º período da Faculdade de Ciências da Computação. </p>

                    <p className="sobre-paragrafo">Tenho experiência em HTML, CSS, CSS Flexbox, CSS Grid, JavaScript e React. Também em desenvolvimento web responsivo, páginas interativas e acessíveis. </p>

                    <p className="sobre-paragrafo">Estou aprimorando conhecimento em TypeScript, NodeJS e Banco de Dados. </p>

                    <p className="sobre-paragrafo">Estou colocando em prática todas minhas skills no Projeto Inventory, veja mais sobre ele abaixo 
                    </p>
                    <NavLink to="/Inventory" className="botao-inventory">Projeto Inventory</NavLink>
                </div>
                <Techs/>
            
            </section>

        </>        
    )
        
}

export default Home