import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useStyles } from './styles';
import ButtonUI from './../ButtonUI/index';
import Box from '@material-ui/core/Box';

const FormLoginCadastro = () => {
  const styles = useStyles();
  const methods = useForm({
    reValidateMode: 'onBlur',
  });

  const { control, handleSubmit } = methods;

  return (
    <div className={styles.content}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Typography variant='h5' component='h2' className={styles.font}>
            Entrar
          </Typography>

          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Controller
                as={TextField}
                type='text'
                label='usuario@ntendencia.com.br'
                control={control}
                name='email'
                defaultValue=''
              />
              <Controller
                as={TextField}
                type='password'
                label='Senha'
                control={control}
                name='senha'
                defaultValue=''
              />
              <ButtonUI
                style={{
                  backgroundColor: '#01321E',
                  width: 300,
                  height: 40,
                }}
                variant='contained'
                type='submit'
                text='Entrar'
              />
            </Box>
          </Box>
          <a href='#' headline='h2'>
            Esqueceu a sua senha?
          </a>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormLoginCadastro;
