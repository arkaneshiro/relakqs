import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '280px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '5px 14.5px 5px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
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
    cursor: 'pointer',
    "&:hover": {
      boxShadow: '0px 0px 2.5px black',
    },
  },
  avatarHover: {

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
  cardRoot: {
    maxWidth: 250,
  },
  cardImage: {
    height: '250px'
  },
  previewImg: {
    width: '250px'
  },
  cardHoverShadow: {
    position: 'relative',
    width: '250px',
    height: '250px',
    top: '-250px',
    '&:hover': {
      boxShadow: 'inset 0 0 10px 0px black',
      backgroundColor: 'rgba(0, 0, 0, .3)'
    },
  },
  cardEditImgTxt: {
    position: 'relative',
    left: '93px',
    top: '115px',
    color: 'white',
    fontWeight: '500',
    fontSize: 'large',
  },
  username: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 'x-large'
  },
  text: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: 'Helvetica',
    padding: '5px 0px 3px'
  },
  textInput: {
    background: 'whitesmoke',
  },
  hidden: {
    display: 'none'
  }
}));

export default useStyles;
