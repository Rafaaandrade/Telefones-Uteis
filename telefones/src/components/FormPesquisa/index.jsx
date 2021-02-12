import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';

const FormPesquisa = () => {
  const [dados, setDados] = useState();

  const styles = useStyles();

  const unidades = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro'];

  const methods = useForm({
    reValideateMode: 'onBlur',
  });

  const handleChange = (event) => {
    setDados((prevState) => ({ ...prevState, unidade: event.target.value }));
    console.log(dados);
  };

  const { control, handleSubmit } = methods;

  return (
    <div style={{ width: '100%' }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <InputLabel id='Unidade'>Unidade</InputLabel>
          <FormControl>
            <Select
              id='unidade'
              name='unidade'
              value={dados}
              onChange={handleChange}
              labelId='Unidade'
              control={control}
              width='50px'
            >
              {unidades.map((value, index) => (
                <MenuItem key={index}>{value}</MenuItem>
              ))}
            </Select>
            <TextField
              id='colab'
              name='colaborador'
              type='text'
              label='Digite o nome do colaborador'
              className={styles.fieldColab}
            />
          </FormControl>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormPesquisa;
