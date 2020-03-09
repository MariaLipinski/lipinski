import React, {Fragment} from 'react';

import Header from './components/header/Header';
import ParallaxPrincipal from './components/parallax/ParallaxPrincipal'


import './Styles.css';

function App() {
  return (
    <Fragment>
      <Header/>
      <ParallaxPrincipal/>
    </Fragment>
  );
}

export default App;
