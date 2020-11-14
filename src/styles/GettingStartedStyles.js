import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 'xxx-large',
    fontWeight: 'bold',
    paddingLeft: '9.5px',
  },
  subtitle: {
    fontSize: 'x-large',
    fontWeight: 'bold',
    paddingLeft: '9.5px',
  },
  copy: {
    padding: '0px 0px 9.5px 9.5px',
  }
}))

export default useStyles;
