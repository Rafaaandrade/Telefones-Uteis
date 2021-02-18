import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IMAGES from './../../assets/images/logo.svg';
import { useStyles } from './style';
import MenuUI from './../Menu/index';

const Header = () => {
  const styles = useStyles();

  return (
    <>
      <AppBar className={styles.appbar}>
        <div className={styles.content}>
          <div>
            <img src={IMAGES} className={styles.imagem} alt='' />
          </div>
          <MenuUI />
        </div>
      </AppBar>
    </>
  );
};

export default Header;
