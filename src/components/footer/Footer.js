import React, {Fragment} from 'react';
import Logo from '../../images/logofooter.png';
import Panorama from '../../images/panorama.jpeg';

const Footer = () => {
  return (
    <Fragment>
    <footer className="" id="footer">
      <div className="container">
        <img className="logo-rodape" src={Logo} alt="logo"/>
        <p className="text-center">Rua João Lipinski, 203 - Colônia Murici, São José dos Pinhais/PR</p>
        <p className="text-center">Fixo - (41) 3635-1220</p>
        <p className="text-center">Ivete - (41) 9 9159-4855</p>
        <p className="text-center">Guilherme - (41) 9 9847-5596</p>
      </div>
      <img className="panorama" src={Panorama} alt="panorama"/>
    </footer>
    </Fragment>
    );
}
export default Footer;
