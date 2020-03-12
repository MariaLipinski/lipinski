import React, {Fragment} from 'react';
import Line from '../usaveis/Line';

function Produtos({ boxData }) {
  return (
    <Fragment>
    <section id="produtos" className="container">
        <h1 className="text-center green-3 c-font-24 c-font-bold">Produtos</h1>
        <Line/>
        <div className="row">
        {boxData.map(box => (
         <div className="col m6 s-12 text-center produto-height" key={box.id}>
          <div className="fundo-produto">
             <div className={box.icon}/>
             <h5>{box.title}</h5>
             <p>{box.text}</p>
             <p>Valor unitário R$<b className="c-font-1">{box.valor_unitario}</b></p>
             <p>{box.text_preco}<b className="c-font-14">{box.valor_caixa}</b></p>
           </div>
         </div>
        ))}
       </div>
     </section>
   </Fragment>
  );
}

export default Produtos;
