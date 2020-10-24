import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80.4%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '9.5px',
  },
  list: {
    margin: '0px',
    padding: '0px'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
  submitCreateForm: {
    width: '100%',
  },
}));

export default useStyles;
