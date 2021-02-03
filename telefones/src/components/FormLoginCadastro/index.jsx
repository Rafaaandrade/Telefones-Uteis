import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useStyles } from './../../containers/Home/styles';
import ButtonUI from './../ButtonUI/index';

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
          <Typography component='h4' headline='h2'>
            Entrar
          </Typography>
          <div className={styles.formulario}>
            <Controller
              as={TextField}
              type='text'
              label='usuario@ntendencia.com.br'
              control={control}
              name='email'
              defaultValue=''
            />
            <div>
              <Controller
                as={TextField}
                type='password'
                label='Senha'
                control={control}
                name='senha'
                defaultValue=''
              />
            </div>
            <ButtonUI
              style={{ backgroundColor: '#01633A' }}
              variant='contained'
              type='submit'
              text='Entrar'
            />
          </div>
          <a href='#' headline='h2'>
            Esqueceu a sua senha?
          </a>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormLoginCadastro;
