import React, {Fragment} from 'react';
import ImgNot from '../../images/notfound.jpg'


const NotFound = () => {
  return (
    <Fragment>
      <section id="notfound">
        <div className="container">
          <h1 className="text-center green-1 c-font-45 c-font-bold">Página não encontrada</h1>
          <p className="text-center m-bottom-35 c-font-24 green-1">Parece que as lagartas comeram tudo por aqui :(</p>
          <img className="img-notfound" src={ImgNot} alt="imagem notfound"/>
        </div>
      </section>
    </Fragment>
    );
}
export default NotFound;
