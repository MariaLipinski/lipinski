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
    valor_caixa:'14,00',
    icon: "crespa"
  },
  {
    id: Math.random(),
    title: "Alface Lisa",
    text: 'A alface lisa é o tipo mais usado nas cozinhas domésticas. As folhas são lisas, macias e mais frágeis, mas muito saborosas.',
    valor_unitario: '',
    valor_caixa:'',
    icon: "lisa"
  },
  {
    id: Math.random(),
    title: "Escarola",
    text: 'Possui largas folhas verde-escuras, que têm um sabor suave, amargo e textura crocante. Nativa das Índias Orientais.',
    valor_unitario: '',
    valor_caixa:'',
    icon: "escarola"
  },
  {
    id: Math.random(),
    title: "Brócolis",
    text:  'Brócolis do tipo ramoso é caracterizado principalmente por apresentar inflorescências laterais, também de coloração verde-escura.',
    valor_unitario: '',
    valor_caixa:'',
    icon: "brocolis"
  }
];

function App() {
  return (
      <Fragment>
        <Header/>
        <ParallaxPrincipal/>
        <QuemSomos />
        <Produtos boxData={produtos} id="produtos"/>
        <Diferenciais id="diferenciais"/>
        <Footer id="footer"/>
      </Fragment>
  );
}

export default App;
