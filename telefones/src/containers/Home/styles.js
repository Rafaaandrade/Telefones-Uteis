import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  painelEsquerdo: {
    color: 'black',
    width: '60%',
    display: 'flex',
    backgroundColor: 'red',
  },
  painelDireito: {
    width: '40%',
    backgroundColor: '#029456',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    color: 'white',
  },
  content: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    justifyContent: 'center',
  },
}));

export default useStyles;
