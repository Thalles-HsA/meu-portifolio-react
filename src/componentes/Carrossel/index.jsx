// Import Style css
import './Carrossel.css'

// Import de Imagens
import imagens from "./imagens.json"

// Import Swiper Componentes
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow, EffectCube, EffectFade, EffectFlip, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';

export default function Carrossel() {
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

            {imagens.map((i) => {
                return (
                    <SwiperSlide key={i.id}>
                        <img src={i.imagem} alt={i.alt} />
                        <h3>{i.titulo}</h3>
                        <p>{i.descricao1}</p>
                        <p>{i.descricao2}</p>
                        <p>{i.descricao3}</p>
                        <div className='carrossel-tech'>
                            <p>Tecnologia(s) utilizada(s):</p>
                            <AiFillHtml5 style={{ color: '#ff5722' }} className='carrossel-icons' />
                            <DiCss3 style={{ color: '#2196f3' }} className='carrossel-icons' />
                            <DiJavascript1 style={{ color: '#ffdf00' }} className='carrossel-icons' />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};