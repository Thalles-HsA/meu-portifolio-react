import './Tags.css'

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiMongodb, DiSass } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'


interface TecnologiasProps {
  tecnologias: {
    html: boolean;
    css: boolean;
    js: boolean;
    react: boolean;
    node: boolean;
    mongo: boolean;
    ts: boolean;
    sass: boolean;
  };
}

function Tecnologias({ tecnologias }: TecnologiasProps) {
  return (
    <div className='carrossel-tech'>
      <p>Tecnologia(s) utilizada(s):</p>
      {tecnologias?.html && (
        <AiFillHtml5 style={{ color: '#ff5722' }} className='carrossel-icons' title="HTML"/>
      )}
      {tecnologias?.css && (
        <DiCss3 style={{ color: '#2196f3' }} className='carrossel-icons' title="CSS"/>
      )}
      {tecnologias?.js && (
        <DiJavascript1 style={{ color: '#ffdf00' }} className='carrossel-icons' title="JavaScript"/>
      )}
      {tecnologias?.react && (
        <DiReact style={{ color: '#5ed3f3' }} className='carrossel-icons' title="ReactJS"/>
      )}
      {tecnologias?.node && (
        <FaNodeJs style={{ color: '#75b430' }} className='carrossel-icons' title="NodeJS"/>
      )}
      {tecnologias?.mongo && (
        <DiMongodb style={{ color: '#118d4d' }} className='carrossel-icons' title="MongoDB"/>
      )}
      {tecnologias?.sass && (
        <DiSass style={{ color: '#c76494' }} className='carrossel-icons' title="Sass"/>
      )}
      {tecnologias?.ts && (
        <SiTypescript style={{ color: '#0076c6' }} className='carrossel-icons' title="TypeScript"/>
      )}
    </div>
  );
}

export default Tecnologias;
