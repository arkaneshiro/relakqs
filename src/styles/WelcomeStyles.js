import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    width: '100%',
  },
  paper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Times New Roman',
    fontSize: '150px',
    display: 'flex',
    justifyContent: 'center',
    transition: 'font-size 2s',
  },
  logoEffect: {
    "&:hover": {
      transition: 'font-size .1s',
      fontSize: '200px',
    },
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
    position: 'absolute',
    left: '25%',
    top: '300px',
    width: '50%'

  }
}));

export default useStyles;
