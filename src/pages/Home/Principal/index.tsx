import "./Home.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AnimatedTypingComponent from "../../../components/Digitando";

//import IMG 
import imgPrincipal from "../home.jpg";
import engRoxa from "../engrenagemroxa.png";
import engLaranja from "../engrenagemlaranja.png";

const Principal: REact.FC = () => {
    return (
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
                    <a href='https://github.com/Thalles-HsA' target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/thalleshsa/' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
                </div>
            </div>
            <div className='home-imagem'>
                <img src={imgPrincipal} alt='Computador' className='home-imagem--principal' />
                <img src={engLaranja} alt='Computador' className={'home-imagem--laranja'} />
                <img src={engRoxa} alt='Computador' className='home-imagem--roxa' />
            </div>
        </section>
    );
}

export default Principal;