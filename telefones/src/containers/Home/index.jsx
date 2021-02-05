import React from 'react';
import FormLoginCadastro from './../../components/FormLoginCadastro/index';
import IMAGES from './../../assets/images/logo.svg';
import { useStyles } from './styles';

const HomeContainer = () => {
  const styles = useStyles();

  return (
    <div className={styles.content}>
      <div className={styles.painelEsquerdo}>
        <img src={IMAGES} className={styles.logo} />
      </div>
      <div className={styles.painelDireito}>
        <FormLoginCadastro />
      </div>
    </div>
  );
};

export default HomeContainer;
