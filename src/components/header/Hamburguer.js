import React from 'react';
import { Link } from "react-scroll";

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link
              activeClass="active"
              className="a-mobile"
              to="quemsomos"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >Quem Somos</Link>
        <Link
              activeClass="active"
              className="a-mobile"
              to="produtos"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >Produtos</Link>
        <Link
              activeClass="active"
              className="a-mobile"
              to="diferenciais"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >Diferenciais</Link>
        <Link
              activeClass="active"
              className="a-mobile"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >Contato</Link>

       </List>
    </div>
  );


  return (
    <div>
      <Button className="hide-on-large-only" onClick={toggleDrawer('right', true)}><Icon>add_circle</Icon></Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}
