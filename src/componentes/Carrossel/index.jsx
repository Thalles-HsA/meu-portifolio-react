// Import Style css
import './Carrossel.css'

// Import de Imagens
import alurabook from "./img/Projeto-AluraBook.PNG"
import aluraarray from "./img/Projeto-AlurabookMetodosArray.PNG"
import pong from "./img/Pong.PNG"
import aluramidi from "./img/Projeto-AluraMidi.PNG"
import aluraplus from "./img/Projeto-AluraPlus.PNG"
import barbearia from "./img/Projeto-BarbeariaAlura.PNG"
import freeway from "./img/Projeto-Freeway.jpg"
import gridflex from "./img/Projeto-GridFlexCSS.PNG"

// Import Swiper Componentes
import { Navigation, Pagination, Scrollbar, A11y,EffectCards,EffectCoverflow, EffectCube,EffectFade,EffectFlip, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';

export default function Carrossel () {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow, EffectCube, EffectFade, EffectFlip, Autoplay]}
      effect={"slide"}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={true}
      loop={true}
      loopAdditionalSlides={5}
      navigation
    >
    
        <SwiperSlide>
            <img src={alurabook} alt="" />
            <h3>Alura Book</h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <AiFillHtml5 style={{color: "#ff5722"}} className="carrossel-icons"/>
                <DiCss3 style={{color: "#2196f3"}} className="carrossel-icons"/>
                <DiJavascript1 style={{color: "#ffdf00"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={aluraarray} alt="" />
            <h3>Metodos de Array</h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <AiFillHtml5 style={{color: "#ff5722"}} className="carrossel-icons"/>
                <DiCss3 style={{color: "#2196f3"}} className="carrossel-icons"/>
                <DiJavascript1 style={{color: "#ffdf00"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={aluramidi} alt="" />
            <h3>Alura Midi</h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <DiJavascript1 style={{color: "#ffdf00"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={aluraplus} alt="" />
            <h3>Alura Plus</h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <AiFillHtml5 style={{color: "#ff5722"}} className="carrossel-icons"/>
                <DiCss3 style={{color: "#2196f3"}} className="carrossel-icons"/>
                <DiJavascript1 style={{color: "#ffdf00"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={barbearia} alt="" />
            <h3>Barbearia Alura</h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <AiFillHtml5 style={{color: "#ff5722"}} className="carrossel-icons"/>
                <DiCss3 style={{color: "#2196f3"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={freeway} alt="" />
            <h3>Freeway com JS</h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <DiJavascript1 style={{color: "#ffdf00"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={pong} alt="" />
            <h3>Pong com JS</h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <DiJavascript1 style={{color: "#ffdf00"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={gridflex} alt="" />
            <h3>CSS: Flexbox e grid </h3>
            <p>Trabalhei nesse projeto...</p>
            <p>Resolvi esses problemas...</p>
            <p>Coloquei em prática...</p>
            <div className='carrossel-tech'>
                <p>Tecnologia(s) utilizada(s):</p>
                <DiCss3 style={{color: "#2196f3"}} className="carrossel-icons"/>
            </div>
        </SwiperSlide>

    </Swiper>
  );
};