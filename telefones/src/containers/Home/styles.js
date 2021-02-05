import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  painelEsquerdo: {
    width: '55%',
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
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
    flexFlow: 'row wrap',
    width: '100%',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 100,
    left: 100,
    width: '20%',
  },
}));

export default useStyles;
