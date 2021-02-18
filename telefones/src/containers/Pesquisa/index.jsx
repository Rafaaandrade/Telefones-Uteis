import React from 'react';
import Header from './../../components/Header/index';
import FormPesquisa from './../../components/FormPesquisa/index';

import BACKGROUND from './../../assets/images/background.jpg';
import { useStyles } from './styles';

const PesquisaContainer = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.background}>
        <div>
          <FormPesquisa />
        </div>
      </div>
    </>
  );
};

export default PesquisaContainer;
