import React, {Fragment} from 'react';

import Header from './components/header/Header';
import ParallaxPrincipal from './components/parallax/ParallaxPrincipal'
import QuemSomos from './components/quemsomos/QuemSomos'
import Produtos from './components/produtos/Produtos'
import Diferenciais from './components/diferenciais/Diferenciais';
import Footer from './components/footer/Footer';

import ProdutoInfo from './dados/ProdutoInfo';
import DiferencialInfo from './dados/DiferencialInfo';

import './Styles.css';

function App() {
  return (
      <Fragment>
        <Header/>
        <ParallaxPrincipal/>
        <QuemSomos />
        <Produtos boxData={ProdutoInfo} id="produtos"/>
        <Diferenciais boxData={DiferencialInfo} id="diferenciais"/>
        <Footer id="footer"/>
      </Fragment>
  );
}

export default App;
