import { makeStyles } from '@material-ui/core/styles';
import IMAGES from './../../utils/constants/images';

export const useStyles = makeStyles(() => ({
  fieldColab: {
    minWidth: ({ witdth = 550 }) => witdth,
    backgroundColor: '#E5E5E5',
    marginLeft: '15px',
  },
  test: {
    display: 'flex',
    height: '20%',
  },
  formBackground: {
    minHeight: ({ height = 200 }) => height,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  select: {
    backgroundColor: '#E5E5E5',
    minWidth: ({ witdth = 200 }) => witdth,
  },
  btn: {
    backgroundColor: '#01321E',
    width: '7%',
  },
}));

export default useStyles;
