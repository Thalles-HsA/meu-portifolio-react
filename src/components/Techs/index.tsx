
import './Techs.css';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

function Techs() {
    return (
        <section className='techs'>
            <h2>Minhas Techs</h2>
            <p className='techs-tecnologias'>Tecnologias</p>
            <p className='techs-aprendendo'>Já utilizadas</p>
            <div className='techs-icons'>
                <AiFillHtml5 style={{ color: "#ff5722" }} title="HTML" />
                <DiCss3 style={{ color: "#2196f3" }} title="CSS"/>
                <SiJavascript style={{ color: "#ffdf00" }} title="JavaScript"/>
                <SiReact style={{ color: "#66dcfb" }} title="React"/>
            </div>
            <p className='techs-tecnologias'>Tecnologias</p>
            <p className='techs-aprendendo'>Atualmente Aprendendo</p>
            <div className='techs-icons'>
                <SiNodedotjs style={{ color: "#83cd29" }} title="NodeJS"/>
                <SiMongodb style={{color: "#006849"}} title="MongoDB"/>
            </div>
        </section>
    );
}

export default Techs;