import React, {Fragment} from 'react';
import logo from '../../images/logo.jpeg';
import banner from '../../images/banner.jpg';

import 'materialize-css/dist/css/materialize.min.css';


const Header = () => {
    return (
      <Fragment>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            <img class="logo" src={logo}/>
          </a>
          <ul id="" class="right hide-on-med-and-down">
            <li><a href="sass.html">Quem Somos</a></li>
            <li><a href="badges.html">Produtos</a></li>
            <li><a href="collapsible.html">Contato</a></li>
          </ul>
        </div>
      </nav>
      <div class="parallax-container">
        <div class="parallax">
          <img src={banner}/>
        </div>
      </div>
      </Fragment>
    );
}
export default Header;
