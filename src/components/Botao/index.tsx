import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import "./Botao.css";

type BotaoProps = {
  children: ReactNode;
  link: string
}

const Botao: React.FC<BotaoProps> = ({ children, link }) => {
  return (
    <div className='botao'>
      <NavLink to={`/${link}`}>{children}</NavLink>
    </div>
  );
}

export default Botao;