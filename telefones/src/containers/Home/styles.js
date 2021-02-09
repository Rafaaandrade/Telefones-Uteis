import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  painelEsquerdo: {
    width: '55%',
    display: 'flex',
    backgroundColor: 'white',
    minHeight: ({ height = 625 }) => height,
  },
  painelDireito: {
    width: '45%',
    backgroundColor: '#029456',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    color: 'white',
    minHeight: ({ height = 625 }) => height,
  },
  content: {
    display: 'flex',
    width: '100%',
  },
  logo: {
    marginTop: '80px',
    marginLeft: '80px',
  },
  imagem: {
    width: '80%',
  },
  text: {
    marginTop: '15px',
    borderTop: '4px solid green',
    fontSize: '28px',
    color: 'green',
  },
  divider: {
    '& .MuiDivider-root': {
      backgroundColor: 'green',
    },
  },
}));

export default useStyles;
