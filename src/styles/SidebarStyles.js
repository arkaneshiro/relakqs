import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '280px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '5px',
  },
  list: {
    margin: '0px',
    padding: '0px'
  },
  messageContainer: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  messageTitle: {
    margin: '20px 15px',
    position: 'absolute'
  },
  expand: {
    transform: 'rotate(270deg)',
    // marginLeft: 'auto',
    transition: 'transform .5s',
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
}));

export default useStyles;
