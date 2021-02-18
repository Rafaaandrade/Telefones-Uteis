import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const FormPesquisa = () => {
  const [dados, setDados] = useState('Juiz de Fora');

  const styles = useStyles();

  const unidades = ['São Paulo', 'Juiz de Fora', 'Rio de Janeiro'];

  const methods = useForm({
    reValideateMode: 'onBlur',
  });

  const handleChange = (event) => {
    setDados(event.target.value);
    console.log(dados);
  };

  const { control, handleSubmit } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <div className={styles.test}>
              <Select
                id='unidade'
                name='unidade'
                value={dados}
                onChange={handleChange}
                labelId='Unidade'
                control={control}
                style={{ backgroundColor: '#E5E5E5' }}
              >
                {unidades.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <TextField
                id='colab'
                name='colaborador'
                type='text'
                label='Digite o nome do colaborador'
                className={styles.fieldColab}
              />
            </div>
          </FormControl>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </form>
      </FormProvider>
    </>
  );
};

export default FormPesquisa;
