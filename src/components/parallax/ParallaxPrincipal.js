import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxPrincipal = () => {
  return (
    <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../images/banner.jpg')}
            bgImageAlt="the dog"
            strength={200}
        >
            <div style={{ height: '500px' }} />
        </Parallax>
      </div>
  );
}

export default ParallaxPrincipal;
