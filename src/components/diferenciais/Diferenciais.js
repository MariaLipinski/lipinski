import React from 'react';
import { Parallax } from 'react-parallax';
import Line from '../usaveis/Line';

const Diferenciais = () => {
  return (
    <section id="diferenciais">
      <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../images/fundo.jpeg')}
            bgImageAlt="the dog"
            strength={500}>
            <h1 className="c-font-24 c-font-white text-center c-font-bold">Diferenciais</h1>
            <Line/>
            <div style={{ height: '400px' }} />
        </Parallax>
      </div>
    </section>
  );
}

export default Diferenciais;
