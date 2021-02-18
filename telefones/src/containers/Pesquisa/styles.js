import { makeStyles } from '@material-ui/core/styles';
import BACKGROUND from './../../assets/images/background.jpg';

export const useStyles = makeStyles(() => ({
  background: {
    width: '70%',
    minHeight: ({ height = 200 }) => height,
    backgroundImage: `url(${BACKGROUND})`,
  },
}));

export default useStyles;
