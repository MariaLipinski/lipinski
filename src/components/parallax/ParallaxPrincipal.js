import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxPrincipal = () => {
  return (
    <section id="banner">
      <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../images/banner.jpg')}
            bgImageAlt="the dog"
            strength={400}>
            <div style={{ height: '500px' }} />
        </Parallax>
      </div>
    </section>
  );
}

export default ParallaxPrincipal;
