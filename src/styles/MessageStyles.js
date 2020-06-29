import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  message: {
    padding: '1px 5px'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: '5px'
  },
  username: {
    marginRight: '5px',
  },
  cardRoot: {
    maxWidth: 200,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Helvetica',

  }
}));

export default useStyles;
