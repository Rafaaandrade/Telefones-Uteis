import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: '10px',
  },
  formulario: {
    width: '100%',
    display: 'flex',
  },
  font: {
    fontWeight: 'bold',
    marginBottom: '50px',
  },
  input: {
    '& div.MuiInputBase-root': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
  },
}));

export default useStyles;
