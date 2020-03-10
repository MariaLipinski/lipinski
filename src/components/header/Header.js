import React, {Fragment} from 'react';
import { Link } from "react-scroll";
import SwipeableTemporaryDrawer from './Hamburguer.js';

import logo from '../../images/logo.jpeg';
import banner from '../../images/banner.jpg';

import 'materialize-css/dist/css/materialize.min.css';


const Header = () => {
    return (
      <Fragment>
      <nav>
        <SwipeableTemporaryDrawer/>
        <div className="nav-wrapper">
          <Link
                to="banner"
                smooth={true}
                offset={-70}
                duration= {500}
                className="brand-logo">
            <img className="logo" src={logo} alt="Logo"/>
          </Link>
          <ul id="" className="right hide-on-med-and-down">
            <li><Link
                  activeClass="active"
                  to="quemsomos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  >Quem Somos</Link>
            </li>
            <li><Link
                  activeClass="active"
                  to="produtos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  >Produtos</Link>
            </li>
            <li><Link
                  activeClass="active"
                  to="diferenciais"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  >Diferenciais</Link>
            </li>
            <li><Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  >Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="parallax-container">
        <div className="parallax">
          <img src={banner} alt="banner"/>
        </div>
      </div>
      </Fragment>
    );
}
export default Header;
