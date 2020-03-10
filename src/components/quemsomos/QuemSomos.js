import React, {Fragment} from 'react';
import Line from '../usaveis/Line';
import ParallaxQuemSomos from './ParallaxQuemSomos';


const QuemSomos = () => {
  return (
    <Fragment>
      <section id="quemsomos">
        <div className="container">
          <h1 className="text-center green-3 c-font-24 c-font-bold">Quem Somos</h1>
          <Line className="white"/>
          <p className="text-center m-bottom-35 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet pharetra dolor, sed vulputate erat sagittis eget. Nulla auctor ex et efficitur fringilla. Sed nec turpis eget augue tincidunt condimentum vitae eget neque. Nam viverra varius consequat. Duis tempus posuere auctor. Pellentesque nec fringilla lacus. Sed luctus cursus odio, sit amet pretium enim cursus eget. Ut egestas molestie tellus vel gravida. Nullam mattis porttitor nisl, sit amet pellentesque tortor aliquet placerat. Proin purus tortor, elementum eget convallis ut, elementum sit amet odio. Proin sed molestie metus, rhoncus bibendum nulla. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <ParallaxQuemSomos/>
      </section>
    </Fragment>
    );
}
export default QuemSomos;
