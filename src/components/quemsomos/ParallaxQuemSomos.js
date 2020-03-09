import React, {Fragment, Component } from 'react';
import { Parallax } from 'react-parallax';

const ParallaxEsquerdo = () => {
  return (
      <div class="col m6">
        <Parallax
            bgImage={require('../../images/produtos1.jpg')}
            strength={250}>
            <div style={{ height: '400px' }} />
        </Parallax>
    </div>
  );
}

const ParallaxDireito = () => {
  return (
      <div class="col m6">
        <Parallax
            bgImage={require('../../images/produtos2.jpg')}
            strength={250}>
            <div style={{ height: '400px' }} />
        </Parallax>
    </div>
  );
}

class ParallaxQuemSomos extends Component{

    render(){
        return(
          <Fragment>
            <div class="row">
              <ParallaxEsquerdo/>
              <ParallaxDireito/>
            </div>
          </Fragment>
        );
    }

}

export default ParallaxQuemSomos;
