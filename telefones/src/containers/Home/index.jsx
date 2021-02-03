import React from 'react';
import { useStyles } from './styles';
import FormLoginCadastro from './../../components/FormLoginCadastro/index';

const HomeContainer = () => {
  const styles = useStyles();

  return (
    <div className={styles.content}>
      <div className={styles.painelEsquerdo}>TESTE</div>
      <div className={styles.painelDireito}>
        <FormLoginCadastro />
      </div>
    </div>
  );
};

export default HomeContainer;
