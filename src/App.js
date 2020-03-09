import React, {Fragment} from 'react';

import Header from './components/header/Header';
import ParallaxPrincipal from './components/parallax/ParallaxPrincipal'
import QuemSomos from './components/quemsomos/QuemSomos'
import Produtos from './components/produtos/Produtos'
import Diferenciais from './components/diferenciais/Diferenciais';
import Footer from './components/footer/Footer';


import './Styles.css';

const produtos = [
  {
    id: Math.random(),
    title: "Alface Crespa",
    text: 'Rica em fibras, ajuda na digestão e no bom funcionamento do intestino, além de apresentar pequenos teores de minerais como cálcio e fósforo.',
    valor_unitario: '1,00',
    valor_unitario: '1,00',
    valor_caixa:'14,00',
    icon: "../../images/icons/alface-icon.png"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: 'lorem',
    valor_unitario: '',
    valor_caixa:'',
    icon: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: 'lorem',
    valor_unitario: '',
    valor_caixa:'',
    icon: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: 'lorem',
    valor_unitario: '',
    valor_caixa:'',
    icon: "#9FEACD"
  }
];

function App() {
  return (
    <Fragment>
      <Header/>
      <ParallaxPrincipal/>
      <QuemSomos/>
      <Produtos boxData={produtos} />
      <Diferenciais/>
      <Footer/>
    </Fragment>
  );
}

export default App;
