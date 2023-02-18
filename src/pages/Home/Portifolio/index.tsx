import Carrossel from '../../../components/Carrossel';
import "./Portfolio.css";

const Portifolio = () => {
    return (
        <section className="portifolio">
            <h2 className="portifolio-titulo">
                Meu Portifólio
            </h2>
            <p className="portifolio-descricao">
                Esse são alguns de meus trabalhos que já realizei:
            </p>
            <div className="carrossel">
                <Carrossel />
            </div>
        </section>
    );
};

export default Portifolio;