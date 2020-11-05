import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80.4%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    paddingLeft: '9.5px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 'xx-large',
  },
  topic: {
    paddingTop: '12px',
  },
  textInput: {
    background: 'whitesmoke',
  },
  button: {
    margin: '9.5px 0px 9.5px 9.5px',
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
  leaveButton: {
    margin: '9.5px 0px 9.5px 9.5px',
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
  channelInfo: {
    marginLeft: '9.5px',
  },
  buttonAndInfoContainer: {
    display: 'flex',
  },
  list: {
    padding: '0px',
  },
  field2: {
    width: '80.4%',
    position: 'absolute',
    top: '45px',
    backgroundColor: 'solid white'
  },
  field: {
    width: '80.4%',
    position: 'absolute',
    bottom: '0px',
  }
}));

export default useStyles;
