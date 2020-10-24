import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '9.5px',
  },
}))

export default useStyles;
