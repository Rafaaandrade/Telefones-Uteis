import React from 'react';
import FormLoginCadastro from './../../components/FormLoginCadastro/index';
import IMAGES from './../../assets/images/logo.svg';
import { useStyles } from './styles';

import Header from './../../components/Header/index';

const HomeContainer = () => {
  const styles = useStyles();

  return (
    <div className={styles.content}>
      <div className={styles.painelEsquerdo}>
        <div className={styles.logo}>
          <img src={IMAGES} className={styles.imagem} />
          <div className={styles.text}>Telefones Úteis</div>
        </div>
      </div>

      <div className={styles.painelDireito}>
        <FormLoginCadastro />
      </div>
    </div>
  );
};

export default HomeContainer;
