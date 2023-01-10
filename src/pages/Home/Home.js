import "./Sobre.css"
import './Home.css'
import AnimatedTypingComponent from '../../componentes/Digitando'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";



import Header from '../../componentes/Header/Header';
import { NavLink } from 'react-router-dom'
import Techs from '../../componentes/Techs/Techs';

const Home = () => {

    return (
        <div >
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
                <div>
                    <img src="/img/logo512.png" alt="Logo React" />
                    <h3>Esse site está sendo desenvolvido com React</h3>
                </div>
                <Techs/>
            </section>

        </div>        
    )
        
}

export default Home