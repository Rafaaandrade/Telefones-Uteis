import React from 'react';
import FormLoginCadastro from './../../components/FormLoginCadastro/index';
import IMAGES from './../../utils/constants/images';
import { useStyles } from './styles';

const HomeContainer = () => {
  const styles = useStyles();

  return (
    <div className={styles.content}>
      <div className={styles.painelEsquerdo}>
        <img src={IMAGES.NOVA_LOGO} />
      </div>
      <div className={styles.painelDireito}>
        <FormLoginCadastro />
      </div>
    </div>
  );
};

export default HomeContainer;
