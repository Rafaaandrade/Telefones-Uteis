import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useStyles } from './styles';
import ButtonUI from './../ButtonUI/index';
import Box from '@material-ui/core/Box';

const FormLoginCadastro = () => {
  const [isCadastro, setCadastro] = useState(false);

  const styles = useStyles();

  const methods = useForm({
    reValidateMode: 'onBlur',
  });

  const { control, handleSubmit } = methods;

  const changeForm = () => {
    setCadastro(!isCadastro);
  };

  return (
    <div className={styles.content}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Typography variant='h5' component='h2' className={styles.font}>
            {isCadastro ? 'Cadastrar' : 'Entrar'}
          </Typography>

          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Controller
                as={<TextField className={styles.input} />}
                type='text'
                label='usuario@ntendencia.com.br'
                control={control}
                name='email'
                defaultValue=''
              />
              <Controller
                as={<TextField className={styles.input} />}
                type='password'
                label='Senha'
                control={control}
                name='senha'
                defaultValue=''
              />
              {isCadastro ? (
                <Controller
                  as={<TextField className={styles.input} />}
                  type='password'
                  label='Confirmar Senha'
                  control={control}
                  name='senha'
                  defaultValue=''
                />
              ) : (
                ''
              )}
              <ButtonUI
                style={{
                  backgroundColor: '#01321E',
                  width: 300,
                  height: 40,
                  marginBottom: 20,
                  marginTop: 60,
                }}
                variant='contained'
                type='submit'
                text='Entrar'
              />
            </Box>
          </Box>
          <a href='#' onClick={changeForm} className={styles.label}>
            Esqueceu a sua senha?
          </a>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormLoginCadastro;
