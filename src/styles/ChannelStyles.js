import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '81.9%',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    padding: '0px',
  },
  field: {
    position: 'absolute',
    width: '81.9%',
    bottom: '0px',
  }
}));

export default useStyles;
