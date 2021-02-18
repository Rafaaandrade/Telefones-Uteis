import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  fieldColab: {
    minWidth: ({ witdth = 400 }) => witdth,
    backgroundColor: '#E5E5E5',
    marginLeft: '15px',
  },
  test: {
    display: 'flex',
    height: '20%',
    width: '70%',
  },
  button: {
    border: 'none',
    borderRadius: 'none',
  },
}));

export default useStyles;
