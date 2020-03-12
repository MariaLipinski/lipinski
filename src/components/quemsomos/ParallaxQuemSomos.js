import React, {Fragment, Component } from 'react';
import { Parallax } from 'react-parallax';

const ParallaxEsquerdo = () => {
  return (
      <div className="col m6 s-12 m-bottom-20">
        <Parallax
            bgImage={require('../../images/quemsomos/socios.jpeg')}
            strength={250}>
            <div className="padroniza-parallax" style={{ height: '620px' }} />
        </Parallax>
    </div>
  );
}

const ParallaxDireito = () => {
  return (
    <div className="col m6 s-12">
      <div className="row">
        <div className="col m6 s-12 m-bottom-20">
          <Parallax
              bgImage={require('../../images/quemsomos/foto1.jpeg')}
              strength={250}>
              <div className="padroniza-parallax" style={{ height: '300px' }} />
          </Parallax>
        </div>
        <div className="col m6 s-12 m-bottom-20">
          <Parallax
              bgImage={require('../../images/quemsomos/foto2.jpeg')}
              strength={250}>
              <div className="padroniza-parallax" style={{ height: '300px' }} />
          </Parallax>
        </div>
        <div className="col m6 s-12 m-bottom-20">
          <Parallax
              bgImage={require('../../images/quemsomos/foto3.jpeg')}
              strength={250}>
              <div className="padroniza-parallax" style={{ height: '300px' }} />
          </Parallax>
        </div>
        <div className="col m6 s-12 m-bottom-20">
          <Parallax
              bgImage={require('../../images/quemsomos/foto4.jpeg')}
              strength={250}>
              <div className="padroniza-parallax" style={{ height: '300px' }} />
          </Parallax>
        </div>
      </div>
    </div>
  );
}

class ParallaxQuemSomos extends Component{

    render(){
        return(
          <Fragment>
            <div className="">
              <div className="container">
                <div className="row">
                  <ParallaxEsquerdo/>
                  <ParallaxDireito/>
                </div>
              </div>
            </div>
          </Fragment>
        );
    }

}

export default ParallaxQuemSomos;
