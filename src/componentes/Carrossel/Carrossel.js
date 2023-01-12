import './Carrossel.css'

import { Navigation, Pagination, Scrollbar, A11y,EffectCards,EffectCoverflow, EffectCube,EffectFade,EffectFlip, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';

function Carrossel () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow, EffectCube, EffectFade, EffectFlip, Autoplay]}
      effect={"slide"}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={true}
      loop={true}
      loopAdditionalSlides={5}
      navigation
    //   pagination={{ clickable: false }}
    //   scrollbar={{ draggable: false }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    
        <SwiperSlide>
            
            <img src="img/Projeto-AluraBook.png" alt="" />
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
            <img src="img/Projeto-AlurabookMetodosArray.png" alt="" />
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
            <img src="img/Projeto-AluraMidi.png" alt="" />
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
            <img src="img/Projeto-AluraPlus.png" alt="" />
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
            <img src="img/Projeto-BarbeariaAlura.png" alt="" />
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
            <img src="img/Projeto-Freeway.jpg" alt="" />
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
            <img src="img/Projeto-GridFlexCSS.png" alt="" />
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

export default Carrossel