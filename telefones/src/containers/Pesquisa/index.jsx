import React from 'react';
import Header from './../../components/Header/index';
import FormPesquisa from './../../components/FormPesquisa/index';
import { useStyles } from './styles';
import ButtonUI from './../../components/ButtonUI/index';

const PesquisaContainer = () => {
  const styles = useStyles();
  return (
    <>
      <Header />

      <div className={styles.content}>
        <div className={styles.botaoContainer}>
          <div className={styles.botao}>
            <ButtonUI text='add contato' style={{ padding: '10px' }} />
            <ButtonUI text='enviar convite' style={{ padding: '10px' }} />
          </div>
        </div>

        <FormPesquisa />
      </div>
    </>
  );
};

export default PesquisaContainer;
