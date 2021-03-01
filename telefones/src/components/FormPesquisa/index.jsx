import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import BACKGROUND from './../../assets/images/background.jpg';
import { useStyles } from './styles';

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
    <div
      style={{
        backgroundImage: `url(${BACKGROUND})`,
        width: '85%',
      }}
    >
      <div className={styles.formBackground}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <div className={styles.test}>
              <Select
                id='unidade'
                name='unidade'
                value={dados}
                onChange={handleChange}
                labelId='Unidade'
                control={control}
                className={styles.select}
              >
                {unidades.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id='colab'
                name='colaborador'
                type='text'
                label='Digite o nome do colaborador'
                variant='filled'
                className={styles.fieldColab}
              />

              <div className={styles.btn}>
                <IconButton color='primary'>
                  <SearchIcon />
                </IconButton>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default FormPesquisa;
