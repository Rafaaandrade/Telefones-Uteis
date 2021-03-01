import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  background: {
    display: 'flex',
    width: '80%',
    minHeight: ({ height = 200 }) => height,
  },
  botaoContainer: {
    minHeight: ({ height = 150 }) => height,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  botao: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
    display: 'flex',
  },
  btn: {
    padding: '15px',
  },
}));

export default useStyles;
