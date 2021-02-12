import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  fieldColab: {
    minWidth: ({ witdth = 322 }) => witdth,
  },
}));

export default useStyles;
