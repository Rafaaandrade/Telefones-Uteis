import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: '#029456',
  },
}));

export default useStyles;
