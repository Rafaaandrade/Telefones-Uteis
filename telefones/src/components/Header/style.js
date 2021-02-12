import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  imagem: {
    width: '7%',
    marginLeft: '5%',
    marginTop: '10px',
  },
  appbar: {
    height: '12%',
    backgroundColor: '#41AF80',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
}));

export default useStyles;
