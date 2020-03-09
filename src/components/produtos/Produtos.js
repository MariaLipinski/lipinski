import React, {Fragment} from 'react';
import Line from '../usaveis/Line';
import Icon from '../../images/icons/alface-icon.png';

function Produtos({ boxData }) {
  return (
    <Fragment>
      <h1 class="text-center green-3 c-font-24 c-font-bold">Nossos Produtos</h1>
      <Line/>
      <div class="row">
       {boxData.map(box => (
         <div class="col m3 s-12 text-center" key={box.id} bgColor={box.bgColor}>
          <div class="fundo-produto">
             <img src={Icon}/>
             <h5>{box.title}</h5>
             <p>{box.text}</p>
             <p>Valor unitário <b class="c-font-1">R${box.valor_unitario}</b></p>
             <p>Valor caixa (18 unidades) <b class="c-font-1">R${box.valor_caixa}</b></p>
           </div>
         </div>
       ))}
     </div>
   </Fragment>
  );
}

export default Produtos;
