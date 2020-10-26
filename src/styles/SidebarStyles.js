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
  logoutButton: {
    margin: '0px 9.5px',
    font: '400 .850rem arial',
    backgroundColor: 'rgb(239, 239, 239)',
    border: '1px solid rgb(133, 133, 133)',
    borderRadius: '3px',
    outline: 'none',
    color: 'black',
    "&:hover": {
      backgroundColor: 'rgb(230, 230, 230)',
      border: '1px solid rgb(118, 118, 118)',
      cursor: 'pointer',
    },
    "&:active": {
      backgroundColor: 'rgb(239, 239, 239)',
      border: '1px solid rgb(150, 150, 150)',
    },
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
  gettingStarted: {
    padding: '19px 16px'
  },
  expand: {
    transform: 'rotate(270deg)',
    transition: 'transform .5s',
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
}));

export default useStyles;
