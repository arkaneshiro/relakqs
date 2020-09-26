import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80.4%',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    padding: '0px',
  },
  field: {
    width: '80.4%',
    position: 'absolute',
    bottom: '0px',
  }
}));

export default useStyles;
