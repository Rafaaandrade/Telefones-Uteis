import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IMAGES from './../../assets/images/logo.svg';
import { useStyles } from './style';
import MenuUI from './../Menu/index';

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar className={styles.appbar}>
      <img src={IMAGES} className={styles.imagem} />
      <MenuUI />
    </AppBar>
  );
};

export default Header;
