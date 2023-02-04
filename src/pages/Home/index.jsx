// import CSS

import "./Sobre.css"
import "./Home.css"
import "./Portfolio.css"

// import Componentes Externos
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import AnimatedTypingComponent from '../../componentes/Digitando'


//import Componentes Internos
import Techs from '../../componentes/Techs';
import Carrossel from "../../componentes/Carrossel";
import Header from '../../componentes/Header';
import Logo from "../../componentes/Logo";

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
                    <img src='/assets/img/home.jpg' alt='Computador' className='home-imagem--principal' />
                    <img src='/assets/img/engrenagemLaranja.png' alt='Computador' className='home-imagem--laranja'/>
                    <img src='/assets/img/engrenagemRoxa.png' alt='Computador' className='home-imagem--roxa'/>
                </div>
            </section>

            <hr className="hr"/>
            
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

            <hr className="hr"/>

            <section className="portifolio">
                <h2 className="portifolio-titulo">Meu Portifólio</h2>
                <p className="portifolio-descricao">Esse são alguns de meus trabalhos que já realizei:</p>
                <div className="carrossel">
                    <Carrossel />
                </div>
                
            </section>
        </>        
    )
        
}

export default Home