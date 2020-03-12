import React, {Fragment} from 'react';
import Line from '../usaveis/Line';
import ParallaxQuemSomos from './ParallaxQuemSomos';

const QuemSomos = () => {
  return (
    <Fragment>
      <section id="quemsomos">
        <div className="container">
          <h1 className="text-center green-3 c-font-24 c-font-bold">Nossa História</h1>
          <Line className="white"/>
          <p className="text-center m-bottom-35 ">Em abril de 1878, 20 famílias de imigrantes poloneses chegaram na cidade de São José dos Pinhais criando a comunidade de Colônia Murici, onde concretizaram o projeto de "cinturão verde" ao redor de Curitiba, afim de abastecer essa região com produtos de subsistência. Assim crescemos rodeados de cultura e ensinamentos por nossos antepassados, nossa família que carrega o sobrenome de Lipinski quebrou a fronteira dos munícipios oferecendo hortaliças de qualidade não só para São José, mas também as regiões Litorâneas do Paraná e Santa Catarina</p>
          <p className="text-center m-bottom-35 ">O nome Gato Preto deu-se origem a partir do apelido do pai da família, João Lipinski Neto (em memória), que recebeu devido ao seu carisma e apoio que dava a todos da comunidade. A família é constituída pelo João, Ivete e seus três filhos, Luciane, Maria Eduarda e Guilherme que também herdou o mesmo apelido e trabalha juntamente com as hortaliças.</p>
        </div>
        <ParallaxQuemSomos/>
      </section>
    </Fragment>
    );
}
export default QuemSomos;
