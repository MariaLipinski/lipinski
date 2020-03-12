import React, {Fragment} from 'react';
import { Parallax } from 'react-parallax';
import Line from '../usaveis/Line';

const Diferenciais = ({ boxData }) => {
  return (
    <Fragment>
      <section id="diferenciais">
        <div className="">
          <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('../../images/fundo.jpeg')}
              bgImageAlt="the dog"
              strength={500}>
              <h1 className="c-font-24 c-font-white text-center c-font-bold m-top-40">Diferenciais</h1>
              <Line background="white"/>
              {boxData.map(box => (
                <div className="m-bottom-35" key={box.id}>
                   <div className={box.icon}/>
                   <h5 className="c-font-white text-center c-font-20">{box.title}</h5>
                   <p className="c-font-white text-center">{box.text}</p>
                 </div>
              ))}
          </Parallax>
        </div>
      </section>
    </Fragment>
  );
}

export default Diferenciais;
