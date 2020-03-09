import React, {Fragment} from 'react';

import Header from './components/header/Header';
import ParallaxPrincipal from './components/parallax/ParallaxPrincipal'
import QuemSomos from './components/quemsomos/QuemSomos'


import './Styles.css';

function App() {
  return (
    <Fragment>
      <Header/>
      <ParallaxPrincipal/>
      <QuemSomos/>
    </Fragment>
  );
}

export default App;
