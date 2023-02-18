// Import Style css
import './Carrossel.css';

// Import de Imagens
import imagens from "./imagens.json";

// Import Swiper Componentes
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow, EffectCube, EffectFade, EffectFlip, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Icons
import Tecnologias from './Tags';


interface Imagem {
    id: number;
    link: string;
    imagem: string;
    alt: string;
    titulo: string;
    descricao1: string;
    descricao2: string;
    descricao3: string;
    tecnologias: {
        html: boolean;
        css: boolean;
        js: boolean;
        react: boolean;
        node: boolean;
        mongo:boolean;
        ts: boolean;
        sass: boolean;
        
    };
};



function Carrossel() {

    const swiperOptions: SwiperOptions = {
        modules: [Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow, EffectCube, EffectFade, EffectFlip, Autoplay],
        effect: 'slide',
        spaceBetween: 50,
        slidesPerView: 3,
        autoplay: { delay: 3000 },
        loop: true,
        navigation: true,
    };

    return (
        <Swiper {...swiperOptions}>

            {imagens.map((i: Imagem) => {
                return (
                    <SwiperSlide key={i.id}>
                        <a
                            href={i.link}
                            className='carrossel-img'
                            target="_blanck"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}${i.imagem}`}
                                alt={i.alt} className="carrossel-img__img"
                            />
                        </a>
                        <h3 className='carrossel-titulo'>{i.titulo}</h3>
                        <p>{i.descricao1}</p>
                        <p>{i.descricao2}</p>
                        <p>{i.descricao3}</p>
                        <Tecnologias tecnologias={i.tecnologias} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Carrossel;