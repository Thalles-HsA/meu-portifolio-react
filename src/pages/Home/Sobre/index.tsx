import { NavLink } from "react-router-dom";
import Logo from "../../../components/Logo";
import Techs from "../../../components/Techs";
import "./Sobre.css";

const Sobre = () => {
    return (
        <section className='sobre'>
            <div className="sobre-container">
                <Logo />
                <h3>Thalles Henrique</h3>
                <p className="sobre-paragrafo">
                    Atualmente estou cursando o 2º período da Faculdade de Ciências da Computação e tenho experiência em desenvolvimento de Frontend, utilizando HTML, CSS, JavaScript e React (com TypeScript), bem como no desenvolvimento de Back-end, utilizando Node.js e MongoDB.
                </p>
                <p className="sobre-paragrafo">
                    Estou empregando todas as minhas habilidades aqui no meu Portifólio e também Projeto Inventory, que está em andamento. Se quiser saber mais sobre ele, confira abaixo.
                </p>
                <NavLink to="/Inventory" className="botao-inventory">
                    Projeto Inventory
                </NavLink>
            </div>
            <Techs />
        </section>
    );
};

export default Sobre;